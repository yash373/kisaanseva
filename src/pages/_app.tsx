import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import { atom } from "jotai";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";

const kart = atom<ItemProps[]>([])

export { kart }

export interface ItemProps {
  image: string,
  price: number,
  category: string,
  slug: string,
  title: string,
  desc: string
}

export default function App({ Component, pageProps }: AppProps) {
  const [isPC, setIsPC] = useState(false)

  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? false
      : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
        navigator.userAgent
      )
        ? false
        : true;

  useEffect(() => {
    if (detectDeviceType()) {
      setIsPC(true)
    }
  })

  return (
    <>
      <Head>
        <title>Onlyfamers</title>
        <link rel="icon" type="image/png" href="/Onlyfarmers.ico" />
      </Head>
      <div className="flex md:space-x-5">
        {isPC && <Sidebar />}
        <div className="flex flex-col md:w-[94vw]">
          <Navbar />
          <div className="flex">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}
