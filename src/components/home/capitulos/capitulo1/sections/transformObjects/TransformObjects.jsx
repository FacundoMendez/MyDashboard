import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import sceneTransformObjects from './sceneTransformObjects'


const TransformObjects = () => {

  useEffect(() => {
    sceneTransformObjects()
  },[])

  return (
    <div className="sceneTransformObject">
        <NavLink to="/Capitulo1" className="linkHome">Back </NavLink>

        <canvas className='webGl_TransformObject'></canvas>
    </div>
  )
}

export default TransformObjects