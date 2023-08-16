import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/Loginuser", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({

                    email: credentials.email,
                    password: credentials.password

                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter valid values");
            }
            if (json.success) {
                localStorage.setItem("userEmail",credentials.email);
                localStorage.setItem("authToken",json.authToken);
                console.log(localStorage.getItem("authToken"))
                navigate("/");
            }

        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }


    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (

        <div>
            <div><Navbar/></div>
            <div className='bg-dark text-light'>
                <form className='' onSubmit={handleSubmit}>

                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-tex text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
                    </div>




                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/signup">
                        <button type="button" className="btn btn-danger m-3">I am a new user</button>
                    </Link>
                </form>
            </div>
            <div><Footer/></div>
        </div>
    )


}
