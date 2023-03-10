import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { del_mv } from '../../redux/action'
const Card = ({el}) => {
  const {movie}=useSelector(state=>state)
  const dispatch=useDispatch()
  // const [rating, setRating] = useState(3)
  
  // Catch Rating value
  // const handleRating = (rate) => {
  //   setRating(rate)

  //   // other logic
  // }
  
  return (
    <div className="containerr">
            <img src={"img/movies/"+ el.img} alt="Avatar" className="image imgvid"  />
            <div className="middle">
              <div className="text">
                {/* <i class="fa-brands fa-youtube"></i> */}
                <div className="details">

                    <h5>{el.name}</h5>
                    <h5>Release date : {el.date}</h5>
                    <Rating initialValue={el.ratev}/>
                    <Link to={`/decription/${el.id}`}>
                     <button  className='detail but'>More detail</button>
                     </Link>
                    <button onClick={()=>dispatch(del_mv(el.id))} className='del but'>Delete</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Card