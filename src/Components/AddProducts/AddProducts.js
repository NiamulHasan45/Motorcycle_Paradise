import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddProducts.css'

const AddProducts = () => {

    // const[product, setProduct] = useState({});

    const nameRef = useRef();
    const imagedRef = useRef();
    const priceRef = useRef();
    const sellerRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const img = imagedRef.current.value;
        const price = priceRef.current.value;
        const supplier = sellerRef.current.value;
        const quantity = amountRef.current.value;
        const description = descriptionRef.current.value;
        const data = {name, img, price, supplier, quantity, description};
        // console.log(data)
        // await setProduct(data);
        // console.log(product);


        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )

    }

    return (
        <div className='add-container p-5'>
            {/* <div className='m-3'>welcome</div> */}
            <div className='m-5'>
                <h2>Please enter detail information of product</h2>
            </div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" ref={nameRef} placeholder="Enter product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" ref={imagedRef} placeholder="Enter product image url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" ref={priceRef} placeholder="Enter product price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" ref={sellerRef} placeholder="Seller Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" ref={amountRef} placeholder="Amount of product" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter detail information of product</Form.Label>
                    <Form.Control as="textarea" ref={descriptionRef} rows={3} />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Submit Information
                </Button>
            </Form>
        </div>
    );
};

export default AddProducts;