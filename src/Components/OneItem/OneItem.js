import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './OneItem.css';

const OneItem = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    console.log(item);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const { img, name, supplier, description, price, quantity } = item;

    return (
        <div className='product-page'>
            <div className='product-container'>
                <img src={img} alt="" />
                <div className='product-information'>
                    <h2>{name}</h2>
                    <h3 className='text-primary'>Price: {price}</h3>
                    <p>Supplier Name: {supplier}</p>
                    <p className='mb-5'><small>{description}</small></p>
                    <h4>Available Quantity: {quantity}</h4>
                </div>
            </div>
        </div>
    );
};

export default OneItem;