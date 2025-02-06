import React from 'react'

export default function () {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade"  data-bs-ride="carousel">
                <div className="carousel-inner" id= "carousel">
                    
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/tasty-noodles-wrapped-around-fork_23-2148189932.jpg?semt=ais_hybrid" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/tasty-noodles-wrapped-around-fork_23-2148189932.jpg?semt=ais_hybrid" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/tasty-noodles-wrapped-around-fork_23-2148189932.jpg?semt=ais_hybrid" className="d-block w-100" style={{ objectFit: "cover", height: "100vh" }} alt="..." />
                    </div>
                </div>
                {/* <div className="carousal-caption m-3 " style={{zIndex : "10"}}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success " type="submit">Search</button>
                        </form>

                    </div> */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

            </div>

        </div>
    )
}

