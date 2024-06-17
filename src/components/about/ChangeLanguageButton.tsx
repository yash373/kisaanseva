import React from 'react'
import Link from 'next/link'

const ChangeLanguageButton = () => {
    return (
        <Link className='w-full mr-2 flex my-auto' href={"https://support.google.com/chrome/answer/173424?hl=en&co=GENIE.Platform%3DDesktop#:~:text=1%20On%20your%20computer%2C%20open%20Chrome.%202%20Go,highlighted%20text.%205%20Click%20Translate%20selection%20to%20%5BLanguage%5D."}>
            <button className='flex ml-auto md:p-2 p-4 hover:bg-green-700 bg-green-400 rounded-md font-semibold'>
                Change Language 👆
            </button>
        </Link>
    )
}

export default ChangeLanguageButton
