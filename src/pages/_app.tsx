import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom, useAtom } from "jotai";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/Popup/Popup";
import LanguageSelector from "@/components/languageselection/LanguageSelector";

const kart = atom<ItemProps[]>([])
const lang = atom<string>("en")
const openLanguageSelector = atom<boolean>(false)

export { kart, lang, openLanguageSelector }

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
  const [showPopup, setShowPopup] = useState(false)
  const [openSelector, setOpenSelector] = useAtom(openLanguageSelector)

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

  useEffect(() => {
    setTimeout(() => {
      // setShowPopup(true);
      // turned off popup
    }, 10000);
  }, []);

  return (
    <>
      <Head>
        <title>KissanSeva</title>
      </Head>
      <div className="flex md:space-x-5">
        {isPC && <Sidebar />}
        <div className="flex flex-col space-y-5 md:w-[94vw]">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
        {showPopup && <Popup handleClose={() => { setShowPopup(false) }} />}
        {openSelector && <LanguageSelector handleClose={() => { setOpenSelector(false) }} />}
      </div>
    </>
  )
}

// Languages that will be supported:
// 1. English
// 2. Hindi
// 3. Bengali
// 4. Kanndada
// 5. Malyalam
// 6. Telugu
// 7. Tamil