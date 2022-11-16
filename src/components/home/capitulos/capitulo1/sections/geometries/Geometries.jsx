import React, {useEffect} from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import webGL_Geometries from './webGL_Geometries'

const Geometries = () => {
  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      webGL_Geometries()
    }
    
  },[activeScene])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>

       {activeScene ?  <canvas className='webGL_geometries'></canvas> : null}

    </div>
  )
}

export default Geometries