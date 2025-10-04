
import React from 'react'

const Card = ({heading , data}) => {

   const styles = {
    backgroundColor: '#f97316', // Tailwind's bg-orange-500
    color: 'white',
    padding: '1rem', // Tailwind's p-4
    borderRadius: '0.5rem', // Tailwind's rounded-lg
  };


  return (
    <div>
      {heading && <label>{heading}</label>}
      <div style={styles}>
      {data}
      </div>
    </div>
  )
}

export default Card


