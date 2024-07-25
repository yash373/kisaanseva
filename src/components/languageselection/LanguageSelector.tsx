import React from 'react'
import { lang } from '@/pages/_app'
import { useAtom } from 'jotai'

interface LanguageSelectorProps {
    handleClose: () => void
}

const LanguageSelector = ({ handleClose }: LanguageSelectorProps) => {
    const [language, setLanguage] = useAtom<string>(lang)

    return (
        <div className=''>

        </div>
    )
}

export default LanguageSelector
