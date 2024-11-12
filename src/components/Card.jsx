import React from 'react'

function Card(props) {
  return (
    <div className="card border-0" style={{ width: "18rem" }}>
    <img className="card-img-top" src={props.image} alt="Card image cap" />
    <div className="card-body bg-dark text-light d-flex justify-content-between">
      <div className="title">
      <h5 className="card-title">{props.title}</h5>
      <div className="rating d-flex ">
      <img src="/Star_fill.svg" alt="star fill" height={30} width={30} />
      <p className='mx-2 mt-1' style={{fontWeight:'bold'}}>{props.rating} <span style={{fontWeight:'normal'}}>({props.votes} Votes) </span></p>
     
      </div>
      </div>
      <div className="price">
        <h4 className='badge bg-light text-dark' >{props.price}</h4>
      </div>

     
    
    </div>
  </div>
  
  )
}

export default Card