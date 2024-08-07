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
    const query = `https://chatgpt.com?q=i am a poor farmer in india and i need help, ${search}`

    if (search){
      setSearch("")
      router.push(query)
    }else{
      alert("Your query is empty.")
    }

  }

  return (
    <div className='md:w-[73%] mx-auto w-[95%] border border-gray-400 rounded-lg flex flex-row mb-2'>
      <input value={search} onChange={handleChange} type="name" name="name" id="name" placeholder="Search" className="w-[90%] py-3 px-3 rounded-l-lg border border-gray-400 text-gray-800 font-semibold" />
      <SubmitButton operation={()=>{handleSubmit()}} />
    </div>
  )
}

export default Search
