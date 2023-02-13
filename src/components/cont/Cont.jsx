import React, { useState } from 'react'


import Card from '../card/Card'
import  './Cont.css'



const Cont = ({movi,setMovi,supp,movieSearch}) => {
  
  



  return (
    <div className="cont">

     
{
movieSearch.map(el=>
  <Card key={el.id} el={el} supp={supp} />
  )
}



      
    </div>
  )
}

export default Cont