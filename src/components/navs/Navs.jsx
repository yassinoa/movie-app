import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

import './Navs.css'
function Navs({handleChange,inp,starInp,setRating,rating}) {
  
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    
    // other logic
  }
  
  

   

  return (
    <div className='navb'>
      <div className="navL">
      
       <Link to='/'> <img src="/img/logo.png" className='imglog' alt='' /></Link>
      </div>
      <div className="navM">
          <form>
            <div className="searchbar">
            
                
                  
                <input placeholder="Rechercher" className="searchInput" value={inp}  onChange={handleChange} />
                <div className='serch-r'><i className="fa-solid fa-magnifying-glass searchIcon "></i></div>
                
            </div>
          </form>
        <Rating initialValue={rating} onClick={handleRating}/>
      </div>
     
    </div>
  )
}

export default Navs