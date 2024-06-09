import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex bg-slate-900 text-white justify-center items-center h-screen">
      <Component {...pageProps} />
    </div>
  )
}
