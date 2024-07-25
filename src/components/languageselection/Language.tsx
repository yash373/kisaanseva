import React from 'react'

interface LanguageProps {
    lang: string,
    code: string,
    changeLanguage : (code:string) => void
}

const Language = ({lang, code, changeLanguage}: LanguageProps) => {
  return (
    <div className='fixed h-full my-auto w-[100vw] flex justify-center items-center'>
      
    </div>
  )
}

export default Language
