"use client"

import { useState, useEffect } from "react"
import { Lemon, Sora, Bebas_Neue, Rubik_Burned, Poppins, Inter} from "next/font/google"

import LinkButtons from "@/components/button"
import Link from "next/link"
import Image from "next/image"


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
})

const rubik = Rubik_Burned({
  subsets: ['latin'],
  weight: ['400'],
})

const lemon = Lemon({
  subsets: ['latin'],
  weight: ['400'],
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400'],
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
})


const fonts = [poppins, rubik, lemon, sora, bebas, poppins]

export default function Home() {

  const [font, setFont] = useState(0)

  useEffect(() => {
    if (font < 5) {
      const interval = setInterval(() => {
        setFont(font + 1)
      }, 150)
      return () => clearInterval(interval)
    }
  }, [font])

  const work = [
    {
      title: "Ziggy",
      link: "https://useziggy.com",
      logo: "/ziggy-logo.svg",
      locationX: "33vw",
      locationY: "50vh",
      locationXM: "63vw",
      locationYM: "76vh",
      font: inter.className
    },
    {
      title: "Portfoliwoah",
      link: "https://portfoliwoah.io",
      logo: "/portfoliwoah-logo.svg",
      locationX: "78vw",
      locationY: "20vh",
      locationXM: "68vw",
      locationYM: "30vh",
      font: sora.className
    },
    {
      title: "Oustro",
      link: "https://oustro.xyz",
      logo: "/oustro-logo.svg",
      locationX: "67vw",
      locationY: "84vh",
      locationXM: "13vw",
      locationYM: "65vh",
      font: poppins.className
    }
  ]


  return (
    <main className="w-full bg-slate-100 h-screen px-4 sm:px-24 py-8">
      <h1 className={`${fonts[font].className} text-7xl sm:text-9xl`}>Oustro</h1>
      <h2 className={`${poppins.className} text-xs sm:text-base`}>A creative collective that makes unique software, <span className="underline">for everyone.</span></h2>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
        <LinkButtons title="Careers" link="/" />
        <LinkButtons title="Let's Chat!" link="mailto:chat@oustro.xyz" />
        <LinkButtons title="Blog" link="/" />
        <LinkButtons title="GitHub" link="https://github.com/Oustro" />
        <LinkButtons title="X (Twitter)" link="https://twitter.com/oustrohq" />
      </div>
      {work.map((item, index) => (
        <>
          <div className="hidden sm:block" key={index} style={{ position: "absolute", top: item.locationY, left: item.locationX }}>
            <Link href={item.link}>
              <div className="text-center">
                <Image
                src={item.logo}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto"
                />
                <p className={`${item.font} mx-auto mt-2 text-sm`}>{item.title}</p>
              </div>
            </Link>
          </div>
          <div className="block sm:hidden" key={index} style={{ position: "absolute", top: item.locationYM, left: item.locationXM }}>
            <Link href={item.link}>
              <div>
                <Image
                src={item.logo}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto"
                />
                <p className={`${item.font} mx-auto mt-2 text-sm`}>{item.title}</p>
              </div>
            </Link>
          </div>
        </>
      ))}
    </main>
  )
}
