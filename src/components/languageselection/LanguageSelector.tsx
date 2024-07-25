import React from 'react'
import { lang } from '@/pages/_app'
import { useAtom } from 'jotai'
import Language from './Language'
import { openLanguageSelector } from '@/pages/_app'

interface LanguageSelectorProps {
    
}

const LanguageSelector = ({  }: LanguageSelectorProps) => {
    const [language, setLanguage] = useAtom<string>(lang)
    const [openSelector, setOpenSelector] = useAtom(openLanguageSelector)

    const handleClose = () => {
        setOpenSelector(false)
    }

    const changeLanguage = (code: string) => {
        setLanguage(code)
    }

    return (
        <div className='fixed h-full mx-auto my-auto w-[50vw] flex justify-center items-center'>
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
        </div>
    )
}

export default LanguageSelector
