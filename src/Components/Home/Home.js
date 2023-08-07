import React from 'react'
import './Home.scss'
import tshirt from '../../images/tshirt.png'

function Home() {
  return (
    <div className='home'>
      <div className='img_block'>
        <img src={ tshirt } alt="T shirt" />
      </div>
    </div>
  )
}

export default Home