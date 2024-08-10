import fs from 'fs'
import path from 'path'
import dayjs from 'dayjs'
import { sync } from 'glob'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { CategoryDetail, HeadingItem, Post, PostMatter } from '@/config/types'

const BASE_PATH = '/src/posts'
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

// 모든 MDX 파일 조회
export const getPostPaths = (language: string, category?: string) => {
  const folder = category || '**'
  const postPaths: string[] = sync(
    `${POSTS_PATH}/${folder}/**/*_${language}.mdx`,
  )
  return postPaths
}

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (language: string, postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(language, postPath)
  const postDetail = await parsePostDetail(postPath)
  return {
    ...postAbstract,
    ...postDetail,
  }
}

// MDX의 개요 파싱
// url, cg path, cg name, slug
export const parsePostAbstract = (language: string, postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '')

  const [categoryPath, slug] = filePath.split('/')
  const url = `/blog/${language}/${categoryPath}/${slug}`
  const categoryPublicName = getCategoryPublicName(categoryPath)
  return { url, categoryPath, categoryPublicName, slug }
}

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  const grayMatter = data as PostMatter
  const readingMinutes = Math.ceil(readingTime(content).minutes)

  // dayjs를 사용하여 날짜 데이터 분리
  const dateObj = dayjs(grayMatter.date)
  const year = dateObj.format('YYYY')
  const month = dateObj.format('MM')
  const day = dateObj.format('DD')

  return { ...grayMatter, year, month, day, content, readingMinutes }
}

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ')

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const getPostList = async (
  language: string,
  category?: string,
): Promise<Post[]> => {
  const postPaths = getPostPaths(language, category)
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(language, postPath)),
  )
  return postList
}

// 정렬된 포스트 목록 요청
export const getSortedPostList = async (
  language: string,
  category?: string,
) => {
  const postList = await getPostList(language, category)
  return sortPostList(postList)
}

export const getSitemapPostList = async (language: string) => {
  const postList = await getPostList(language)
  const baseUrl = 'https://ho1112.github.io/'
  const sitemapPostList = postList.map(({ url }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${url}`,
  }))
  return sitemapPostList
}

export const getAllPostCount = async (language: string) =>
  (await getPostList(language)).length

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`)
  const cgList = cgPaths.map((path) => path.split('/').slice(-1)?.[0])
  return cgList
}

export const getCategoryDetailList = async (language: string) => {
  const postList = await getPostList(language)
  const result: { [key: string]: number } = {}
  for (const post of postList) {
    const category = post.categoryPath
    if (result[category]) {
      result[category] += 1
    } else {
      result[category] = 1
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    }),
  )

  return detailList
}

// post 상세 페이지 내용 조회
export const getPostDetail = async (
  language: string,
  category: string,
  slug: string,
) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content_${language}.mdx`
  const detail = await parsePost(language, filePath)
  return detail
}

export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim
  const headingList = content.match(regex)
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  )
}
