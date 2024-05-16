import React from 'react'
import '../styles/BrandBox.css'

const BrandBox = ({imageUrl}) => {
  
  return (
      <img className='brandImg' src={imageUrl} />
  )
}

export default BrandBox