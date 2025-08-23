import React from 'react'
import {LoginButton, Logo, Searchbar} from '../index'

function Navbar() {
  return (
    <div className='flex justify-evenly gap-1 w-ful'>
      <div>
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <LoginButton children="Login" classname="bg-blue-500 px-4 py-1" />
      </div>
    </div>
  )
}

export default Navbar