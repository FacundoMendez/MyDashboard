import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import webGl_basicScene from './webGL_basicScene'

const SceneBasic = () => {

  useEffect(() => {
    webGl_basicScene()
  },[])

  return (
    <div className="sceneBasic">
       <NavLink to="/Capitulo1" className="linkHome">Back </NavLink>

       <canvas className='webGl_basicScene'></canvas>
    </div>
  )
}

export default SceneBasic