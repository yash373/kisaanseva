import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import SubmitButton from './SubmitButton'

const Search = () => {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    const query = `https://chatgpt.com?q=i am a farmer in india and i need help ${search}`

    router.push(query)
  }

  return (
    <div className='md:w-[50%] w-full border border-gray-400 rounded-lg flex flex-row mb-2'>
      <input value={search} onChange={handleChange} type="name" name="name" id="name" placeholder="Search" className="w-[90%] py-3 px-3 rounded-l-lg border border-gray-400 text-gray-800 font-semibold" />
      <SubmitButton />
    </div>
  )
}

export default Search
