import React from 'react'

interface LanguageProps {
    lang: string,
    code: string,
    changeLanguage : (code:string) => void
}

const Language = ({lang, code, changeLanguage}: LanguageProps) => {
  return (
    <div>
        
    </div>
  )
}

export default Language
