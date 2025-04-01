import React from 'react'
import { JellyTriangle } from 'ldrs/react'
import 'ldrs/react/JellyTriangle.css'

const Loader = () => {
  return (
    <div className="container-loader">
      <JellyTriangle
        size="30"
        speed="1.75"
        color="black" 
      />
    </div>
  )
}

export default Loader
