import React, {useEffect} from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import webGL_FullScreenAndResizing from "./webGL_FullScreenAndResizing.js"
import fullImg from "../../src/fullScreen.png"

const FullScreenAndResizing = () => {
  const [activeScene, setActiveScene ] = useState(true)


  useEffect(() => {

    if(activeScene){
      webGL_FullScreenAndResizing()
    }
    
  },[activeScene])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome" onClick={() => setActiveScene(false)}>Back </NavLink>

       {activeScene ?  <canvas className='webGl_fullScreenAndResizing'></canvas> : null}

       <div className="fullScreen">
          <img className='fullScreenImg' src={fullImg} style={{ width:"3rem" , cursor:"pointer", zIndex:"99999" , transition:"all .4s ease"}} alt="fullScreen" />
       </div>

       
    </div>
  )
}
export default FullScreenAndResizing