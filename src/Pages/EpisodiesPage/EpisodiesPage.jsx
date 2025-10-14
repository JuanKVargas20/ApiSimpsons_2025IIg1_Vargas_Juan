import React, { useState, useEffect } from 'react'
import CardEpisodies from '../../Components/CardEpisodies/CardEpisodies'
import HomerGifColumn from '../../Components/HomerGifColumn/HomerGifColumn'

const TOTAL_PAGES = 39

const EpisodiesPage = () => {
  const [episodes, setEpisodes] = useState([])
  const [season, setSeason] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      let allEpisodes = []
      for (let page = 1; page <= TOTAL_PAGES; page++) {
        const res = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
        const data = await res.json()
        allEpisodes = allEpisodes.concat(data.results)
      }
      const episodesWithDescription = await Promise.all(
        allEpisodes.map(async ep => {
          const res = await fetch(`https://thesimpsonsapi.com/api/episodes/${ep.id}`)
          const detail = await res.json()
          return { ...ep, description: detail.description }
        })
      )
      setEpisodes(episodesWithDescription)
    }
    fetchAllEpisodes()
  }, [])

  const filteredEpisodes = episodes.filter(ep =>
    (season === '' || ep.season === Number(season)) &&
    (
      ep.name.toLowerCase().includes(search.toLowerCase()) ||
      (ep.description && ep.description.toLowerCase().includes(search.toLowerCase()))
    )
  )

  // Mostrar GIFs solo si hay muchos episodios
  const showGifs = filteredEpisodes.length > 8

  return (
    <div style={{backgroundColor: 'lightcyan', height: 'calc(100vh - 150px)', width: '100%', padding: '20px', overflowY: 'scroll', position: 'relative'}}>
      <HomerGifColumn show={showGifs} />
      <h2>Episodios</h2>
      <div>
        <label>
          Temporada:
          <input type="number" value={season} onChange={e => setSeason(e.target.value)} min="1" style={{marginLeft: '10px'}} />
        </label>
        <input
          type="text"
          placeholder="Buscar episodio..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{marginLeft: '20px'}}
        />
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {filteredEpisodes.length > 0 ? filteredEpisodes.map(ep => (
          <CardEpisodies key={ep.id} episode={ep} />
        )) : <p>No hay episodios para mostrar.</p>}
      </div>
    </div>
  )
}

export default EpisodiesPage