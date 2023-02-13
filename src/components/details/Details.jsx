import React from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'
const Details = ({movi}) => {
  const params = useParams();
  const movis=movi.find(el=>el.id==Number(params.id))
  console.log(movis,params.id)
  return (
    <div className='desc'>
      <div className="top">
        <img src={`/img/movies/${movis.img}`} alt="Avatar" className="img"  />
        <iframe width="560" height="400" src={`${movis.youtube}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="detail">
        <p>{movis.desc}</p>

      </div>
    </div>
  )
}

export default Details