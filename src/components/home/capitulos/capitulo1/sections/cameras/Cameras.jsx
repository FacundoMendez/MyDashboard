import React, {useEffect} from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import webGl_cameras from './webGL_cameras'

const Cameras = () => {
  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      webGl_cameras()
    }
    
  },[activeScene])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>

       {activeScene ?  <canvas className='webGl_cameras'></canvas> : null}

       
    </div>
  )
}

export default Cameras