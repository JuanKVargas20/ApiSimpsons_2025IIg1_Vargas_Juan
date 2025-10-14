import React from 'react'
import './CardEpisodies.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const CardEpisodies = ({ episode }) => (
  <div className="card-episodie card shadow-sm mb-4" style={{ width: '300px', transition: 'transform 0.3s' }}>
    <div className="overflow-hidden" style={{ borderRadius: '10px 10px 0 0' }}>
      {episode.image_path && (
        <img
          src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
          alt={episode.name}
          className="card-img-top"
          style={{ height: '180px', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
      )}
    </div>
    <div className="card-body">
      <h5 className="card-title">{episode.name}</h5>
      <p className="card-text"><strong>N° Episodio:</strong> {episode.episode_number}</p>
      <p className="card-text">Temporada: {episode.season}</p>
      <p className="card-text">Descripción: {episode.description || 'Sin descripción'}</p>
      <p className="card-text">Fecha de emisión: {episode.airdate || 'Sin fecha'}</p>
    </div>
  </div>
)

export default CardEpisodies