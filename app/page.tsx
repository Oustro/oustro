"use client"

import { useState, useEffect } from "react"
import { Lemon, Sora, Bebas_Neue, Press_Start_2P, Rubik_Burned, Poppins, IBM_Plex_Mono } from "next/font/google"

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

const press = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
})

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300'],
})

const fonts = [poppins, rubik, lemon, sora, bebas, press, poppins]

export default function Home() {

  const [font, setFont] = useState(0)

  useEffect(() => {
    if (font < 6) {
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
      locationY: "50vh"
    },
    {
      title: "Portfolio",
      link: "https://portfoliwoah.io",
      logo: "/portfoliwoah-logo.svg",
      locationX: "78vw",
      locationY: "20vh"
    },
    {
      title: "Oustro",
      link: "https://oustro.xyz",
      logo: "/oustro-logo.svg",
      locationX: "67vw",
      locationY: "84vh"
    }
  ]


  return (
    <main className="w-full bg-slate-100 h-screen px-24 py-8">
      <h1 className={`${fonts[font].className} text-8xl sm:text-9xl`}>Oustro</h1>
      <h2 className={`${poppins.className} text-xs sm:text-base left-4`}>A creative collective that makes unique software, <span className="underline">for everyone.</span></h2>
      <div className="flex items-center gap-4 mt-8">
        <LinkButtons title="Careers" link="/" />
        <LinkButtons title="Investors" link="mailto:invest@oustro.xyz" />
        <LinkButtons title="Blog" link="/" />
        <LinkButtons title="GitHub" link="https://github.com/Oustro" />
        <LinkButtons title="X (Twitter)" link="https://twitter.com/oustrohq" />
      </div>
      {work.map((item, index) => (
        <div key={index} style={{ position: "absolute", top: item.locationY, left: item.locationX }}>
          <Link href={item.link}>
            <div>
              <Image
              src={item.logo}
              alt={item.title}
              width={50}
              height={50}
              className="mx-auto"
              />
              <p className={`${ibm.className} mx-auto mt-2 text-sm`}>{item.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  )
}
