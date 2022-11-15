import React from 'react'

const Box = ({index}) => {

  return (
    <div className="box_slider box"> 
        <img className='imgBox'  src={index.img} alt="back box" />
        <p className='textBox'>{index.descripcion}</p>
    </div>
  )
}

export default Box