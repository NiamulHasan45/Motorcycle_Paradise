import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './OneItem.css';

const OneItem = () => {

    const  [remaining, setRemainig]= useState(0);

    const itemRef = useRef();

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const {img, name, supplier, description, price, quantity } = item;

    const handleProduct=(quantity)=>{
        if(quantity>0){
            let remainingPro = quantity-1;
            setRemainig(remainingPro); 
        }
        else{
            alert('No product is available');
        }

    }



    const handleForm = event =>{
        event.preventDefault();
        const number = itemRef.current.value;
        setRemainig(number);
        console.log(remaining);
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(remaining)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    }




    return (
        <div className='product-page pb-5'>
            <div className='product-container'>
                <img src={img} alt="" />
                <div className='product-information'>
                    <h2>{name}</h2>
                    <h3 className='text-primary'>Price: {price}</h3>
                    <p>Supplier Name: {supplier}</p>
                    <p className='mb-5'><small>{description}</small></p>
                    <h4>Available Quantity: {quantity}</h4>
                    <button onClick={()=>handleProduct(quantity)} className='btn btn-primary px-4 py-2 mt-3'>Deliver this item</button>
                    <form onSubmit={handleForm} className='m-5'>
                        <label className='m-3 text-primary'><b>Re-stock this product:</b> </label>
                        <input type="number" ref={itemRef} required placeholder='Amount of product' />
                        <button className='
                        btn btn-warning m-3' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OneItem;