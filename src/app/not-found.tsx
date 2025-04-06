import dynamic from 'next/dynamic'
import Link from 'next/link'

const RandomEmoji = dynamic(() => import('../components/ui/random-emiji'), {
  ssr: false,
})

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-28 text-center px-4">
      <RandomEmoji />
      <h2 className="text-2xl font-semibold mb-4">Not Found</h2>
      <Link
        href="/"
        className="border border-[#e4e4e4] rounded-md text-gray-800 leading-[38px] px-4"
      >
        Home
      </Link>
    </div>
  )
}
