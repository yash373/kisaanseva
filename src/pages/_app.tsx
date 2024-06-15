import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import { atom } from "jotai";
import Sidebar from "@/components/sidebar/Sidebar";
import { BrowserView } from "react-device-detect";
import { useEffect, useState } from "react";

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

  useEffect(()=>{
    if (detectDeviceType()) {
      setIsPC(true)
    }
  })

  return (
    <div className="flex flex-col bg-slate-950 text-white justify-center items-center h-full">
      <div className="flex w-full h-[90vh] overflow-y-auto">
        <Component {...pageProps} />
        {isPC && <Sidebar />}
      </div>
      <Footer />
    </div>
  )
}
