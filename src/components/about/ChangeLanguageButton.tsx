import React from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { openLanguageSelector } from '@/pages/_app'

const ChangeLanguageButton = () => {
    // const link = "https://support.google.com/chrome/answer/173424?hl=en&co=GENIE.Platform%3DDesktop#:~:text=1%20On%20your%20computer%2C%20open%20Chrome.%202%20Go,highlighted%20text.%205%20Click%20Translate%20selection%20to%20%5BLanguage%5D."

    const [openSelector, setOpenSelector] = useAtom(openLanguageSelector)

    return (
        <button onClick={()=>{setOpenSelector(true)}}  className='md:w-[15%] mr-2 my-auto flex mx-auto m-2 md:p-2 p-4 hover:bg-green-700 bg-green-400 rounded-md' >
            <p className='font-semibold mx-auto'>
                Change Language 👆
            </p>
        </button>
    )
}

export default ChangeLanguageButton
