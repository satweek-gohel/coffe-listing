import React from 'react'
import Collections from './Collections'

function Banner() {
  return (
    <div className="container-fluid p-0">
      <img 
        src="./bg-cafe.jpg" 
        alt="Cafe Banner"
        className="w-100 object-fit-cover"
      />
      <div className="container d-flex justify-content-center" style={{ position: 'relative', top: '-50px' }}>
        <div className="collection" style={{ zIndex: '999' }}>
          <Collections />
        </div>
      </div>
    </div>
  )
}

export default Banner