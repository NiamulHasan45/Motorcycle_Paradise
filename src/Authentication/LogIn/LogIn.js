import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LogIn.css';
import google from '../../Components/Images/google-01.png';
import github from '../../Components/Images/github-01.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import Loading from '../../SharedComponents/Loading/Loading';


const LogIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        emailPassError,
    ] = useSignInWithEmailAndPassword(auth);

    const
        [signInWithGoogle, 
            googleUser, 
            googleLoading, 
            googleError
        ] = useSignInWithGoogle(auth);
    const
        [signInWithGithub, 
            gitUser, 
            gitLoading, 
            gitError
        ] = useSignInWithGithub(auth);

        const 
        [sendPasswordResetEmail, 
            sending, 
            resetError
        ] = useSendPasswordResetEmail(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else{
           toast.error('please enter your email address');
        }
    }

    if (loading || googleLoading||gitLoading||sending) {
        return <Loading></Loading>;
    }
    if(emailPassError){
        errorElement = <p className='text-danger'>{emailPassError.message}</p>
    }
    if(gitError){
        errorElement = <p className='text-danger'>{gitError.message}</p>
    }
    if(googleError){
        errorElement = <p className='text-danger'>{googleError.message}</p>
    }
    if(resetError){
        errorElement = <p className='text-danger'>{resetError.message}</p>
    }


    if (user || googleUser || gitUser) {
        navigate(from, { replace: true });
    }


    return (
        <div className='login-container'>
            <div className='p-2'><h2>Welcome</h2></div>
            <Toaster />
            <div className='main-form p-5 mx-auto text-white'>
                <h2 className='text-primary text-center p-5'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New to this site? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
                <div>
                    <Button onClick={() => signInWithGoogle()} className='w-50 d-block mx-auto mb-3 d-flex align-items-center justify-content-center'>

                        <img src={google} alt="" />
                        <p className='ms-2 mt-2'>Login with google</p>

                    </Button>
                    <Button onClick={() => signInWithGithub()} className='w-50 d-block mx-auto d-flex align-items-center justify-content-center'>

                        <img src={github} alt="" />
                        <p className='ms-2 mt-2'>Login with github</p>

                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;