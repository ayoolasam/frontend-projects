import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import './Card.css'
import icon from "../assets/icon-dice.svg"
import pattern from "../assets/pattern-divider-desktop.svg"
const Card = () => {
  const [advice,setAdvice]= useState({})
  
  const fetchData = async()=>{


  await axios.get("https://api.adviceslip.com/advice").then((res)=>{
    setAdvice(res.data.slip)})

}
  
  


const handledata =()=>{
 fetchData();
}



  return (
    <div>
    
<div className="card">
<span>Advice 177</span>
<div className='adv'>
<p>{advice.advice}</p>
</div>

<div>
<img  style={{width:"250px" ,height:"500"}}src={pattern} alt="patterndivider"/>
</div>
  
<div className='contain'>
<img src={icon} alt="dice" onClick={handledata}/>
</div>
  
</div>
  




    </div>



  )
}

export default Card