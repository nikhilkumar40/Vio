
import { useEffect, useState } from 'react'
import './App.css'
import { MainLayout } from './components/index'
import { movieApi } from './services/ApiService'

function App() {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const movi = await movieApi();
    setMovies(movi);
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <MainLayout />
      {
        movies.map(data => (
          <div key={data}>{data}</div>
        ))
      }
    </div>
  )
}

export default App
