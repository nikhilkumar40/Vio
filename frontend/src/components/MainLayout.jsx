import {Footer, Navbar} from './index'
import HomePage from '../pages/HomePage'

function MainLayout() {
  return (
    <div className='mt-5'>
        <Navbar />
        <HomePage />
        <Footer />
    </div>
  )
}

export default MainLayout