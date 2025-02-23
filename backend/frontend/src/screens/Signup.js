import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", address: "", location: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.address
                })
            });

            if (!response.ok) {
                throw new Error('Enter valid credentials');
            }

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter valid values");
            }
            else{
                localStorage.setItem("authToken",json.authToken);
        
                navigate("/");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please enter correct values.');
        }
    }


    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
             <div> <Navbar /> </div>
            <div className='bg-dark text-light'>
                <form className='' onSubmit={handleSubmit}>
                    <div className="bg-dark">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />

                    </div>
                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-tex text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" name="address" value={credentials.address} onChange={onChange} />
                    </div>



                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login">
                        <button type="button" className="btn btn-danger m-3">Already a user</button>
                    </Link>
                </form>
            </div>
            <div>< Footer /></div>
        </div>
    )
}
