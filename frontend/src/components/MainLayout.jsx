import { Footer, Navbar, QuickButton } from './index'
import HomePage from '../pages/HomePage'

function MainLayout() {

  const recents = [
    { id: 1, name: "News" },
    { id: 2, name: "Movies" },
    { id: 3, name: "Sports" },
    { id: 4, name: "Songs" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Podcasts" },
  ]

  return (
    <div className='flex flex-col min-h-screen mt-5'>
      <Navbar />
      <div className='flex justify-evenly items-center gap-2 w-6xl m-auto mt-4'>
        {
          recents.map(recent => (
            <div key={recent.id}>
              <QuickButton children={recent.name} />
            </div>
          ))
        }
      </div>
      <HomePage />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout