import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';


export default function Home() {

    const [food_category, setFoodCategory] = useState([]);
    const [food_items, setItems] = useState([]);
    const [search,setSearch] = useState("");

    const loadData = async () => {
        let response = await fetch("/foodData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }
        });
        response = await response.json();
        //console.log(response[0].options)
        setItems(response[0]);
        setFoodCategory(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="bg-dark">
            <div> <Navbar /> </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" id="carousel">

                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900×700/?pasta" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                        </div>
                    </div>
                    <div className="carousal-caption m-3 " style={{ zIndex: "10" }}>
                        <div class="d-flex justify-content-center">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            {/* <button class="btn btn-outline-success " type="submit">Search</button> */}
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>

            <div className='container'>
                {
                    food_category.length !== 0
                        ? food_category.map((data) => (
                            <div className='row mb-3' key={data._id}>
                                <div className='col mb-3'>
                                    <div className='text-light fs-3 m-3'>
                                        {data.CategoryName}
                                        <hr />
                                        <div className='row g-4'>
                                            {food_items.length !== 0 ? (
                                                food_items
                                                    .filter(item => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                                                    .map(filteritems => (
                                                        <div key={filteritems._id} className='col-12 col-md-6 col-lg-4 mb-3'>
                                                            {/* //{console.log(filteritems.options[0])} */}
                                                            <Card fooditems={filteritems} options={filteritems.options[0]}
                                                              
                                                            >
                                                            </Card>
                                                        </div>
                                                    ))
                                            ) : (
                                                <div>No food items available</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : ""
                }
            </div>

            <div><Footer /></div>
        </div>
    )
}
