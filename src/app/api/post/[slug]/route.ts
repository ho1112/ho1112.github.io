
import { getPostDetail } from "@/lib/post";

export async function POST(request: Request) {
  const { category, slug, language } = await request.json();
  try {
    const post = await getPostDetail(category, slug, language);
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch(err) {
    console.log(err)
    throw new Error('Failed POST')
  }
}
