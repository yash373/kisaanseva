import React from 'react'
import { lang } from '@/pages/_app'
import { useAtom } from 'jotai'
import Language from './Language'

interface LanguageSelectorProps {
    handleClose: () => void
}

const LanguageSelector = ({ handleClose }: LanguageSelectorProps) => {
    const [language, setLanguage] = useAtom<string>(lang)

    const changeLanguage = (code: string) => {
        setLanguage(code)
    }

    return (
        <div className='fixed h-full my-auto w-[100vw] flex justify-center items-center'>
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
        </div>
    )
}

export default LanguageSelector
