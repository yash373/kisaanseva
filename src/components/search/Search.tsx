import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState<string>("")

  return (
    <div className='w-[50%] rounded-md flex mb-2'>
      this is the search box
    </div>
  )
}

export default Search
