import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchVideo } from '../services/SearchSlice';

function Searchbar() {

  const [searchItem, setSearchItem] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchVideo(searchItem))
  }, [searchItem])


  return (
    <div className='border-2 border-[#a3a3a3] bg-[#f3f3f3] rounded-xl'>
      <input className='px-5 w-2xl h-9'
        type='text'
        placeholder='Search anything'
        value={searchItem} 
        onChange={(e) => setSearchItem(e.target.value)} />
    </div>
  )
}

export default Searchbar