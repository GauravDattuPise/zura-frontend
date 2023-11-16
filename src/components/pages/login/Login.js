import React, { useContext, useEffect, useState } from 'react'

import { Button, TextField } from "@mui/material"
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate, Link} from "react-router-dom"

import "../register/Register.css"

const Login = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    // handle input change
    function handleInputChange(e) {
        setInputs((preState) => ({
            ...preState,
            [e.target.name]: e.target.value
        }))
    }
    

    async function handleLogin(e) {
        try {
            e.preventDefault();

            const userObj = {
                email: inputs.email,
                password: inputs.password
            }

            const res = await axios.post("https://zura-backend-35dz.onrender.com/user/login", userObj)
            const fetchedData = res.data.userData
            console.log(fetchedData)

          

            if (res.data.status) {
                toast.success(res.data.message);

                const userData = JSON.stringify(fetchedData);
                console.log(userData)
                localStorage.setItem("userData", userData)
                 console.log("before naviation")
                navigate("/create-project")
                
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("error in user login")
            console.log(error.message)
        }
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='form-control' onSubmit={handleLogin}>

                {/* email */}
                <TextField
                    className='text-field'
                    name="email"
                    value={inputs.email}
                    label="Enter email"
                    type='email'
                    variant='outlined'
                    onChange={handleInputChange}
                    required
                />

                {/* password */}
                <TextField
                    className='text-field'
                    name="password"
                    value={inputs.password}
                    label="Enter password"
                    type='password'
                    variant='outlined'
                    onChange={handleInputChange}
                    required
                />

                <Button type='submit' variant='contained'>Login</Button>
                <Link to="/register" className="link-style">not an account! register here</Link >

            </form>
        </div>
    )
}

export default Login