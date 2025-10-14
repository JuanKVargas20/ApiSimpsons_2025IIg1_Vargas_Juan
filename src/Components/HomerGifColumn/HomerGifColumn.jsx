import React from 'react'

const HomerGifColumn = () => {
  return (
    <div
      style={{
        position: 'fixed',
        right: '60px', // centro del espacio blanco
        top: '50%',
        transform: 'translateY(-50%)',
        width: '220px',
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 2,
        background: 'transparent'
      }}
    >
      <img
        src="https://media1.tenor.com/m/RPNoOOImaRwAAAAd/homer-simpson-homer-dance.gif"
        alt="Homer Simpson bailando"
        style={{
          width: '220px',
          height: '480px',
          opacity: 0.95,
          pointerEvents: 'none',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default HomerGifColumn