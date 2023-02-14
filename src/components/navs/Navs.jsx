import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { setrt, set_inp } from '../../redux/action';

import './Navs.css'
function Navs() {
  const {rate,inp}=useSelector(state=>state)
  const dispatch=useDispatch()
  // Catch Rating value
  // const handleRating = (rate) => {
  //   setRating(rate)
    
  //   // other logic
  // }
  const handleRatings = (X) => {
      dispatch(setrt(X))
      
      // other logic
    }
  
// const [inp, setInp] = useState("")
  const handleChange=(e)=>{
    
    dispatch(set_inp(e.target.value))
  }
   

  return (
    <div className='navb'>
      <div className="navL">
      
       <Link to='/'> <img src="/img/logo.png" className='imglog' alt='' /></Link>
      </div>
      <div className="navM">
          <form>
            <div className="searchbar">
            
                
                  
                {/* <input placeholder="Rechercher" className="searchInput" value={inp}  onChange={handleChange} /> */}
                <input placeholder="Rechercher" className="searchInput"  value={inp} onChange={handleChange} /> 
                <div className='serch-r'><i className="fa-solid fa-magnifying-glass searchIcon "></i></div>
                
            </div>
          </form>
        {/* <Rating initialValue={rating} onClick={handleRating}/> */}
        <Rating initialValue={rate} onClick={handleRatings}/> 
      </div>
     
    </div>
  )
}

export default Navs