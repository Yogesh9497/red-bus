import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast, {Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/")
        }
    }, []);

    function login(){
        if(!username.current.value || !password.current.value){
            toast.error("Both the fields are required");
        }
        else{
            localStorage.setItem("token", "userToken");
            navigate("/");
        }
    }
    return (
        <div>
            <Toaster/>
            <Container className='d-flex flex-column justify-content-center align-items-center bg-light m-0 mw-100'
            style={{height: "100vh"}}>
                <h1>Log In</h1>
                <Form.Control ref={username} 
                placeholder="User Name" 
                aria-label="Username" 
                aria-describedby="basic-addon1"
                className="mt-4 w-50" />

                <Form.Control ref={password}  
                type="password" 
                placeholder="Password" 
                aria-describedby="basic-addon1"
                className="mt-4 w-50" />

                <Button variant='danger' className='mt-4 w-50' onClick={login}>Login</Button>
            </Container>
        </div>
    );
};

export default Login;