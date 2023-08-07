import { useState } from 'react'
import './App.css'
import datas from "./data.json"
import {Routes, Route, Link, Navigate} from "react-router-dom"
import Planetarium from './pages/Planetarium'
import { useEffect } from 'react'






function App() {

  const [menuOpen, setMenuOpen] =  useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    
    
    <div className='overflowHidden'>
    <div className='starting'>
    <p className='logo'>The Planets</p>
    <img onClick={() => {
      
        setMenuOpen(!menuOpen)
      
    }} src="/assets/icon-hamburger.svg" alt="" />
    </div>
    <div   className={`menu ${menuOpen ? 'menu-open' : ''}`}>
   {datas.map((data) => {
    return(<Link   onMouseEnter={() => {
      let links = document.querySelectorAll('.linkP')
      links.forEach((link) => {
        link.addEventListener('mouseover', (e) => {
          const hoveredLink = e.target
          hoveredLink.style.borderTop = `2px solid ${data.color}`
        })
        link.addEventListener('mouseout', (event) => {
          const hoveredLink = event.target;
          hoveredLink.style.borderTop = 'none';
        });
      })
    }} 
    
    onMouseLeave={() => {
     
    }}

    

     onClick={() => {
      if (windowWidth < 768) {

     
      setMenuOpen(!menuOpen)
      
    }
    }} key={data.name} className='link' to={'/planets/' + data.name}><div className='planetAndText'><div className='planetColor' style={{backgroundColor: data.color, width:'20px', height:'20px',borderRadius:'50%'}} ></div><p className='linkP'>{data.name}</p></div><img className='arrow' src="/assets/icon-chevron.svg" alt="" /></Link>)
    })}
    </div>
    { menuOpen ? null :
    
    (<Routes>
      <Route path='/' element={<Navigate to='/planets/Mercury'/>} />
      <Route path='/planets/:name' element={<Planetarium datas={datas}/>}/>
    </Routes>) 
    
    }
    
    </div>
    

  )
}

export default App
