import React, { useEffect, useState } from 'react'
import Card from './card'
import { fetch_data } from '../api/collection'

function Collections() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("all");
    const getData = async () => {
        const result = await fetch_data();
        console.log('API Result:', result);
        setData(result);
    }

    useEffect(() => {
        getData();
    }, [])

    const filterData = filter === "all" ? data : data.filter(item => item.available);

    return (
        <div className='container-fluid bg-dark p-5'>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="content ">
                        <h2 className='text-center text-light'>Our Collection</h2>
                        <p className='text-center text-light'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    </div>

                    <div className="btns d-flex gap-3 justify-content-center mb-3">
                        <button className={`btn ${filter === "all" ? "btn-secondary" : "btn-dark"}`} onClick={() => setFilter("all")}>All Products</button>
                        <button className={`btn ${filter === "available" ? "btn-secondary" : "btn-dark"}`} onClick={() => setFilter("available")}>Available Now</button>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                        {filterData.map((item) => {
                            
                           return <div className="col position-relative" key={item.id}>
                                <span className="position-absolute badge bg-warning" style={{top: '10px', left: '10px', zIndex: 1}}>
                                    {item?.popular && "Popular"}
                                </span>
                                <Card title={item.name} image={item.image} rating={item.rating} votes={item.votes} price={item.price} sold={item.available ? "" :"Sold Out"} />
                                <span className="position-absolute badge bg-danger" style={{top: '10px', left: '250px', zIndex: 1}}>
                                    {item?.available ? "" :"Sold Out"}
                                </span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections