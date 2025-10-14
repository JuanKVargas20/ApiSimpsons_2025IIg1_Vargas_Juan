import React from 'react'
import './CardCharacters.css'
import { Link } from 'react-router-dom'

const CardCharacters = ({ data }) => {
  return (
    <div className='card-character'>
      <Link to={`/personaje/${data.id}`}>
        <img 
          src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`} 
          alt={data.name} 
          className="character-img"
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Nombre:</strong> {data.name}</p>
      <p className="occupation"><strong>Ocupación:</strong> {data.occupation}</p>
    </div>
  )
}

export default CardCharacters
