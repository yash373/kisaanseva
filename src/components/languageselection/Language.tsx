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
        <div>

        </div>
    )
}

export default Language
