import React from 'react'

const Card = ({ image, name, position, team }) => {
    const { src, alt } = image;
  return (
    <div className='card'>
        <img src={src} alt={alt} />
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{team}</p>
    </div>
  )
}

export default Card