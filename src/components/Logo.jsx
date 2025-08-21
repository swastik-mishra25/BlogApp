import React from 'react'
import logo from '../assets/logoBlogApp.png'

function Logo({width = '200px', height = '150px'}) {
  return (
    <div>
      <img src={logo} alt="Blog App Logo" width={width} height={height} />
    </div>
  )
}

export default Logo