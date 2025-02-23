import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//mport '~bootstrap-icons/font/bootstrap-icons.css';



import { useCart, useDispatchCart } from './ContextReducer';

export default function
    Card(props) {
    let dispatch = useDispatchCart();
    const price = Object.keys(props.options);
    console.log(price)
    let data = useCart();
    let fooditem = props.fooditems;
    const [size, setSize] = useState("")
    const [qty, setQty] = useState("")
    // const [price,setPrice] = useState("")

    const handleAddtoCart = async () => {
        let selectedSizePrice = props.options[size]; // Get the price based on the selected size

        let totalPrice = (parseInt(selectedSizePrice) * qty);
        //console.log(totalPrice)

        await dispatch({ type: "ADD", id: fooditem._id, name: fooditem.name, price: totalPrice, qty: qty, size: size })
        console.log(data)


    }
    let finalPrice = parseInt(props.options[size]) * qty;
    



    // let sizes = Object.keys(options[0]);
    return (

        <div className="card m-3 bg-dark text-light border-black " style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src={fooditem.img} className="card-img-top" alt="..." style={{ maxHeight: '150px', width: '100%', objectFit: 'cover' }}
            />
            <div className="card-body fs-5">
                <h5 className="card-title">{fooditem.name}</h5>

                <div className="container w-100" >
                    <select className='m-2 text-small bg-success rounded custom-select' onChange={(e) => setQty(e.target.value)}>
                        <option value=""> Qty</option>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option className='text-small' key={i + 1}> {i + 1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 bg-success text-small rounded' onChange={(e) => setSize(e.target.value)}>
                        <option value="">Select Size</option>
                        {price.map((data) => (
                            <option key={data} value={data}>{data}</option>
                        ))}

                    </select>




                   {/* <div className='d-inline fs-5'>
                            EU {finalPrice/100}  
                    </div>  */}
                    {/* <div className="d-inline fs-6">
    EU <span style={{ whiteSpace: 'nowrap' }}>{(finalPrice / 100).toFixed()}</span> 
</div>  */}

                    {/* <div className="d-inline fs-6">
                        EU {isNaN(finalPrice) ? 0 : <span style={{ whiteSpace: 'nowrap' }}>{(finalPrice / 100).toFixed()}</span>}
                    </div> */}

                </div>

                {(localStorage.getItem("authToken")) ? (
                    <div className="d-flex justify-content-center text-center fs-5">
                        <button className='btn btn-success mb-2 mt-2 fs-8 ' onClick={handleAddtoCart}>Add to Cart</button>

                    </div>
                ) : (
                    <div className="d-flex justify-content-center text-center fs-5">
                        <Link to="/login" className='btn btn-success mb-2 mt-2 fs-8'>Add to Cart</Link>
                    </div>
                )}





            </div>
        </div>

    )
}
