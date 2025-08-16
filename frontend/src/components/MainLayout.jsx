import React from 'react'
import {Footer, Navbar} from './index'
import HomePage from '../pages/HomePage'

function MainLayout() {
  return (
    <div>
        <Navbar />
        <HomePage />
        <Footer />
    </div>
  )
}

export default MainLayout