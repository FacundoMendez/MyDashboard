import React, {useEffect} from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import webGl_animations from './WebGL_animations'

const Animations = () => {
  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      webGl_animations()
    }
    
  },[activeScene])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>

       {activeScene ?  <canvas className='webGl_animations'></canvas> : null}

       
    </div>
  )
}


export default Animations