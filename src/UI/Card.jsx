import React from 'react'
import fuji from "../assets/Fuji.jpeg"
import marker from "../assets/marker.png"

const Card = ({country,location,date,description,place}) => {
  
  return (
    <>
       <img className='card-img' src={fuji}/>
       <div>
     <img src={marker} />
<span>{country}</span>
<a href={location}>View on Google</a>
<h2>{place}</h2>
<p className='date'>{date}</p>
<p>{description}</p>
       </div>
       
    </>
  )
}

export default Card
