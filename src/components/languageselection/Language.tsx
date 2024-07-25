import React from 'react'
import { useAtom } from 'jotai'
import { openLanguageSelector } from '@/pages/_app'

interface LanguageProps {
    lang: string,
    code: string,
    changeLanguage: (code: string) => void,
}

const Language = ({ lang, code, changeLanguage }: LanguageProps) => {
    const [openSelector, setOpenSelector] = useAtom(openLanguageSelector)

    const handleClose = () => {
        setOpenSelector(false)
    }

    return (
        <button className='flex h-[5vh] backdrop-blur-sm w-full'>
            <p className='mx-auto my-auto text-lg capitalize font-semibold'>
                {lang}
            </p>
        </button>
    )
}

export default Language
