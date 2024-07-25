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
        <div className='fixed space-y-5 my-10 py-5 flex-col h-[80vh] backdrop-blur-lg rounded-lg mx-auto w-[100vw] md:w-[50vw] flex items-center overflow-y-scroll'>
            <Heading text={'Select Language'} />
            <Language lang='English' code='en' changeLanguage={changeLanguage} />
            <Language lang='Hindi' code='hi' changeLanguage={changeLanguage} />
            <Language lang='Assamese' code='as' changeLanguage={changeLanguage} />
            <Language lang='Bangla' code='bn' changeLanguage={changeLanguage} />
            <Language lang='Gujarati' code='gu' changeLanguage={changeLanguage} />
            <Language lang='Kannada' code='kn' changeLanguage={changeLanguage} />
            <Language lang='Malayalam' code='ml' changeLanguage={changeLanguage} />
            <Language lang='Marathi' code='mr' changeLanguage={changeLanguage} />
            <Language lang='Nepali' code='ne' changeLanguage={changeLanguage} />
            <Language lang='Oriya' code='or' changeLanguage={changeLanguage} />
            <Language lang='Punjabi' code='pa' changeLanguage={changeLanguage} />
            <Language lang='Sindhi' code='sd' changeLanguage={changeLanguage} />
            <Language lang='Tamil' code='ta' changeLanguage={changeLanguage} />
            <Language lang='Telugu' code='te' changeLanguage={changeLanguage} />
            <Language lang='Urdu' code='ur' changeLanguage={changeLanguage} />
        </div>
    )
}

export default LanguageSelector
