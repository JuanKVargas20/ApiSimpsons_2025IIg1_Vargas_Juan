import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import EpisodiesPage from './Pages/EpisodiesPage/EpisodiesPage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'
import LocationPage from './Pages/LocationPage/LocationPage'
import CharacterDetailPage from './Pages/CharacterDetailPage/CharacterDetailPage'

function App() {
  return (
    <>
      <Header />
      <div id='container-pages'>
        <NavBar />
        <div className="main-content">
          <Routes>        
            <Route path='/episodios' element={<EpisodiesPage />} />
            <Route path='/personajes' element={<CharactersPage />} />
            <Route path='/localizacion' element={<LocationPage />} />
            <Route path='/personaje/:id' element={<CharacterDetailPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
