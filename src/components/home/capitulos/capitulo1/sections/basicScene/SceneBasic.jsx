import React, {useEffect} from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import webGl_basicScene from './webGL_basicScene'

const SceneBasic = () => {

  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      webGl_basicScene()
    }
    
  },[activeScene])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>

       {activeScene ?  <canvas className='webGl_basicScene'></canvas> : null}

       
    </div>
  )
}

export default SceneBasic