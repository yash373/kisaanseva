import React from 'react'
import { lang } from '@/pages/_app'
import { useAtom } from 'jotai'
import Language from './Language'
import { openLanguageSelector } from '@/pages/_app'
import Heading from './Heading'

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
        <div className='fixed space-y-5 my-10 py-5 flex-col h-[80vh] backdrop-blur-lg rounded-lg mx-auto w-[100vw] md:w-[50vw] flex items-center'>
            <Heading text={'Select Language'} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
        </div>
    )
}

export default LanguageSelector
