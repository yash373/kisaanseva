import React from 'react'
import { lang } from '@/pages/_app'
import { useAtom } from 'jotai'

const LanguageSelector = () => {
    const [language, setLanguage] = useAtom<string>(lang)

    return (
        <div>

        </div>
    )
}

export default LanguageSelector
