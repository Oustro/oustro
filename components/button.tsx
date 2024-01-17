import Link from "next/link"
import {  Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})

export default function LinkButtons({ title, link } : { title: string, link: string }) {

  return (
    <div>
      <Link target="_blank" href={link} className={`${poppins.className} bg-[#6851FF] px-2 py-1 rounded text-white hover:bg-black transition`}>
        {title}
      </Link>
    </div>
  )
}