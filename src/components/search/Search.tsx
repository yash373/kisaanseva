import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='md:w-[50%] w-full rounded-md flex flex-col md:flex-row mb-2'>
      <input value={search} onChange={handleChange} type="name" name="name" id="name" placeholder="Search" className="w-[90%] mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
    </div>
  )
}

export default Search
