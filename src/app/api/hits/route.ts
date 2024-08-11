import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    throw new Error('URL parameter is required')
  }

  try {
    const response = await fetch(
      `https://hits.sh/api/urns/ho1112.github.io${url}`,
    )
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ total: '-' }, { status: 500 })
  }
}
