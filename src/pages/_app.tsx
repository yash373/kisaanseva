import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom } from "jotai";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/Popup/Popup";
import { useAtom } from "jotai";

const kart = atom<ItemProps[]>([])
const lang = atom<string>("en")

export const translateText = async (text: string) => {
  const [language, setLanguage] = useAtom<string>(lang)
  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'ec61e51168mshc5dd404402da954p19b372jsnb98e46bc7f2d',
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: {
        from: 'auto',
        to: language,
        text: text,
      }
    });
    const result:any = await response.text();
    return result.trans
  } catch (error) {
    console.error(error);
  }
}

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
  const [showPopup, setShowPopup] = useState(false)

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