import React, { useState } from 'react'
import { useSelector } from 'react-redux'


import Card from '../card/Card'
import  './Cont.css'



const Cont = () => {
  const {movie,rate,inp}=useSelector(state=>state)
  //{movi,setMovi,supp,movieSearch}


const movieSearch=movie.filter((el) =>
el.name.trim().toLowerCase().includes(inp.trim().toLowerCase()) && el.ratev <=rate
)


  return (
    <div className="cont">

     
{
  //supp={supp}
movieSearch.map(el=>
  <Card key={el.id} el={el}  />
  )
}



      
    </div>
  )
}

export default Cont