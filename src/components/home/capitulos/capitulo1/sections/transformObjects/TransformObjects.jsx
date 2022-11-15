import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import sceneTransformObjects from './sceneTransformObjects'


const TransformObjects = () => {

  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      sceneTransformObjects()
    }

  },[activeScene])

  return (
    <div className="sceneTransformObject">
        <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>
        {activeScene ? <canvas className='webGl_TransformObject'></canvas> : null}
    </div>
  )
}

export default TransformObjects