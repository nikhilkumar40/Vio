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
    <div>
      <input
        type='text'
        placeholder='Search anything'
        value={searchItem} o
        nChange={(e) => setSearchItem(e.target.value)} />
    </div>
  )
}

export default Searchbar