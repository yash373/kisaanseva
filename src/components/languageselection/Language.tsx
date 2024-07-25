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

    const handleSelection = () => {
        changeLanguage(code)
        handleClose()
    }

    return (
        <button onClick={handleSelection}  className='flex h-[5vh] my-auto bg-white bg-opacity-50 hover:bg-opacity-70 rounded-md w-[80%]'>
            <p className='mx-auto my-auto text-lg capitalize font-semibold'>
                {lang}
            </p>
        </button>
    )
}

export default Language
