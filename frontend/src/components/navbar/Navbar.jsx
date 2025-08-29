import React from 'react'
import {LoginButton, Logo, Searchbar} from '../index'

function Navbar() {
  return (
    <div className='flex justify-evenly items-center gap-1 w-ful'>
      <div>
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <LoginButton children="Login" classname="bg-[#AD3434] px-4 py-1 text-white w-32" />
      </div>
    </div>
  )
}

export default Navbar