import React from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
import smoke from "../assets/smoke.mp4"
import { useEffect } from 'react'
import gsap from 'gsap'
import move from '../move'
import cap1Img from "../assets/src/1.webp"
import cap2Img from "../assets/src/2.webp"
import cap3Img from "../assets/src/3.webp"
import cap4Img from "../assets/src/4.webp"
import cap5Img from "../assets/src/5.webp"
import cap6Img from "../assets/src/6.webp"
import cap7Img from "../assets/src/7.webp"

const Home = () => {

  const arrLevel = [
    {
      img:cap1Img,
      descripcion:"01 - Basics",
      href: "/capitulo1"
    },
    {
      img:cap2Img,
      descripcion:"02 - Classic techniques",
      href: "/capitulo2"
    },
    {
      img:cap3Img,
      descripcion:"03 - Advanced techniques",
      href: "/capitulo3"
    },
    {
      img:cap4Img,
      descripcion:"04 - Shaders",
      href: "/capitulo4"
    },
    {
      img:cap5Img,
      descripcion:"05 - Extra",
      href: "/capitulo5"
    },
    {
      img:cap6Img,
      descripcion:"06 - Portal Scene",
      href: "/capitulo6"
    },
    {
      img:cap7Img,
      descripcion:"07 - React Three Fiber",
      href: "/capitulo7"
    },
  ]

  useEffect(() => {
    let tl = gsap.timeline({
      duration:2,
    });
    tl.from(".box_levels" , {
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
    <div className='home'>
        <video  className='smoke' src={smoke} autoPlay loop muted></video>

      <div className="box_levels ">
        {arrLevel.map((index, key)  => {
          return <NavLink key={key} to={index.href}>
              <div className="box_slider box"> 
                <img className='imgBox_home'  src={index.img} alt="back box" />
                <p className="textBox">{index.descripcion}</p>
            </div>
           </NavLink> 
          })
        }
      </div>

    </div>
  )
}

export default Home