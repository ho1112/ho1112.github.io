import Link from 'next/link'

export const dynamic = 'force-static'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      {/* <p>Could not find requested resource</p> */}
      <p>ㅠ_ㅠ</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
