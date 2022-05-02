
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (

        <div style={{ height: '80vh' }} className='w-100 d-flex bg-dark justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>

    );
};

export default Loading;