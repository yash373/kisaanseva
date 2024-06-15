import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import { atom } from "jotai";

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
  return (
    <div className="flex flex-col bg-slate-950 text-white justify-center items-center h-full">
      <div className="flex w-full h-[90vh] overflow-y-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
