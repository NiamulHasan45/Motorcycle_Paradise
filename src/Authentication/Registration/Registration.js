import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../SharedComponents/Loading/Loading';
import './Registration.css'


const Registration = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    const from = location.state?.from?.pathname || "/";



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || sending || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    }

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    if (emailError) {
        errorElement = <p className='text-danger'>{emailError.message}</p>
    }
    if (updateError) {
        errorElement = <p className='text-danger'>{updateError.message}</p>
    }


    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='login-container'>
            <div className='p-2'><h2>Welcome</h2></div>
            <div className='login-container'>
                <div className='main-form p-5 mx-auto text-white'>
                    <h2 className='text-primary text-center p-5'>Please Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control ref={nameRef} type="text" placeholder="Enter your Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        {
                            errorElement
                        }
                        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                            Register
                        </Button>
                    </Form>

                    <p>Already registered? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Registration;