import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-slate-900 text-white justify-center items-center h-screen">
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
