import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import smoke from "../../../assets/smoke.mp4"
import gsap from 'gsap'
import move from '../../../move'
import imgPrueba from "../../../assets/blur-colors.png"
import Box from '../box/Box'

const Capitulo7 = () => {
  const arrLevel = [
    {
      img:imgPrueba,
      descripcion:"What are React and React Three Fiber"
    },
    {
      img:imgPrueba,
      descripcion:"First React Application"
    },
    {
      img:imgPrueba,
      descripcion:"First R3F Application"
    },
    {
      img:imgPrueba,
      descripcion:"Drei"
    },
    {
      img:imgPrueba,
      descripcion:"Debug"
    },
    {
      img:imgPrueba,
      descripcion:"Environment and Staging"
    },
    {
      img:imgPrueba,
      descripcion:"Load models"
    },
    {
      img:imgPrueba,
      descripcion:"3D Text"
    },
    {
      img:imgPrueba,
      descripcion:"Portal Scene"
    },
    {
      img:imgPrueba,
      descripcion:"Mouse Events"
    },
    {
      img:imgPrueba,
      descripcion:"Post-processing"
    },
    {
      img:imgPrueba,
      descripcion:"Fun and Simple Portfolio"
    },


    {
      img:imgPrueba,
      descripcion:"Physics"
    },
    {
      img:imgPrueba,
      descripcion:"Create a game"
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
        return <Box index={index} key={key}/> })
        }
    </div>
</div>
)
}


export default Capitulo7