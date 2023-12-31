import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const[show,setshow] = useState(true)

    useEffect(()=>window.addEventListener('scroll',()=>{
        if(window.scrollY>600){
              setshow(true)
    }
    else{
        setshow(false)
    }
   } ))
  return (
    <div className={`${show && 'nav-bar'} nav`}>
        <img  width={'150px'} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="No image" />
    </div>
  )
}

export default Nav