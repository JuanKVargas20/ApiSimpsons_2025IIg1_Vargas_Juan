import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CharacterDetailPage.css'

const CharacterDetailPage = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))
  }, [id])

  if (!character) return <p>Cargando...</p>

  const isAlive = character.status === 'Alive' || character.status === 'alive'
  const statusColor = isAlive ? 'green' : 'red'

  return (
    <div className="character-detail-card">
      <img 
        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} 
        alt={character.name} 
        className="character-img"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/personajes')}
        title="Volver a personajes"
      />
      <button
        style={{
          margin: '12px 0',
          padding: '8px 18px',
          background: '#ffcc00',
          color: '#222',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontFamily: '"Comic Sans MS", cursive',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}
        onClick={() => navigate('/personajes')}
      >
        Volver a personajes
      </button>
      <h2>{character.name}</h2>
      <p><strong>ID:</strong> {character.id}</p>
      <p><strong>Nombre:</strong> {character.name}</p>
      <p><strong>Edad:</strong> {character.age}</p>
      <p><strong>Fecha de Nacimiento:</strong> {character.birthdate}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Ocupación:</strong> {character.occupation}</p>
      <p>
        <strong>Estado:</strong> <span style={{ color: statusColor, fontWeight: 'bold' }}>{isAlive ? 'Vivo' : 'Muerto'}</span>
      </p>
      <div className="phrases-list">
        <strong>Frases:</strong>
        <ul>
          {character.phrases && character.phrases.length > 0
            ? character.phrases.map((phrase, idx) => <li key={idx}>{phrase}</li>)
            : <li>Sin frases</li>
          }
        </ul>
      </div>
    </div>
  )
}

export default CharacterDetailPage