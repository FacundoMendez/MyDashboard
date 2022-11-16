import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import smoke from "../../../assets/smoke.mp4"
import gsap from 'gsap'
import move from '../../../move'
import imgPrueba from "../../../assets/blur-colors.png"
import Box from '../box/Box'

import cap1img  from "./src/cap1.png"
import cap2img from "./src/cap2.png"
import cap3img from "./src/cap3.png"
import cap4img from "./src/cap4.png"
import cap5img from "./src/cap5.png"

const Capitulo1 = () => {


    const arrLevel = [
        {
          img:cap1img,
          descripcion:"Basic Scene",
          href: "/SceneBasic"
        },
        {
          img:cap2img,
          descripcion:"Transform Objects",
          href: "/TransformObjects"
        },
        {
          img:cap3img,
          descripcion:"Animations",
          href: "/Animations"
        },
        {
          img:cap4img,
          descripcion:"Cameras",
          href: "/Cameras"
        },
        {
          img:cap5img,
          descripcion:"Fullscreen and resizing",
          href: "/FullScreenAndResizing"
        },
        {
          img:imgPrueba,
          descripcion:"Geometries",
          href: "/Geometries"
        },
        {
          img:imgPrueba,
          descripcion:"Debug UI",
          href: "/DebugUI"
        },
        {
          img:imgPrueba,
          descripcion:"Textures",
          href: "/Textures"
        },
        {
          img:imgPrueba,
          descripcion:"Materials",
          href: "/Materials"
        },
        {
          img:imgPrueba,
          descripcion:"3D Text",
          href: "/Text3d"
        }
        
      ]


      
  useEffect(() => {
    let tl = gsap.timeline({
      duration:2,
    });

    tl.from(".linkHome" , {
        opacity:0,
        display:"none"
      })
    
    tl.from(".box_levels_capitulos" , {
      opacity:0,
      display:"none"
    })

    tl.to(".smoke" , {
      opacity:0,
      display:"none"
    })

    move()

  },[])


  return (
    <div className='boxCapitulos'>
        <video className='smoke' src={smoke} autoPlay loop muted></video>
        <NavLink to="/home" className="linkHome">HOME </NavLink>
        <div className="box_levels_capitulos ">
            {arrLevel.map((index, key)  => {
            return <NavLink key={key} to={index.href}>
              <Box index={index} key={key}/>
            </NavLink>
             })
            }
          </div>
    </div>
  )
}

export default Capitulo1