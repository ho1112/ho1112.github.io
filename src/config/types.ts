export interface PostMatter {
  title: string
  date: Date
  year: string
  month: string
  day: string
  thumbnail: string
  desc: string
}

export interface Post extends PostMatter {
  url: string
  slug: string
  categoryPath: string
  content: string
  readingMinutes: number
  categoryPublicName: string
}

export interface Comment {
  id: string
  content: string
  author_name: string
  author_avatar: string
  is_bot: boolean
  parent_id: string | null
  created_at: string
  post_id?: string
  replies?: Comment[]
}

export interface CategoryDetail {
  dirName: string
  publicName: string
  count: number
}

export interface HeadingItem {
  text: string
  link: string
  indent: number
}
