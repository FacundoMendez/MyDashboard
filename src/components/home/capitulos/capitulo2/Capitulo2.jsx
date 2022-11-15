import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import smoke from "../../../assets/smoke.mp4"
import gsap from 'gsap'
import move from '../../../move'
import imgPrueba from "../../../assets/blur-colors.png"
import Box from '../box/Box'


const Capitulo2 = () => {
    const arrLevel = [
        {
          img:imgPrueba,
          descripcion:"Lights"
        },
        {
          img:imgPrueba,
          descripcion:"Shadows"
        },
        {
          img:imgPrueba,
          descripcion:"Haunted House"
        },
        {
          img:imgPrueba,
          descripcion:"Particles"
        },
        {
          img:imgPrueba,
          descripcion:"Galaxy Generator"
        },
        {
          img:imgPrueba,
          descripcion:"Raycaster"
        },
        {
          img:imgPrueba,
          descripcion:"Scroll based animation"
        },
  
        
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
            return <Box index={index} key={key}/> })
            }
        </div>
    </div>
  )
}


export default Capitulo2