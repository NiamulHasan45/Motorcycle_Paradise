import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './OneItem.css';

const OneItem = () => {

    const [remaining, setRemainig] = useState(0);

    const itemRef = useRef();

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [remaining])

    const { img, name, supplier, description, price, quantity } = item;

    const handleProduct = (number) => {
        if (number > 0) {
            let quantity = number - 1;

            // setRemainig(number);
            const data = { quantity };

            // setRemainig(quantity);
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    setRemainig(result);
                })
        }
        else {
            alert('No product is available');
        }

    }



    const handleForm = number => {
        
        const quantity = parseInt(itemRef.current.value) + number;
        const data = { quantity };
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setRemainig(result);
            })
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
                    <button onClick={() => handleProduct(quantity)} className='btn btn-primary px-4 py-2 mt-3'>Deliver this item</button>
                    <form className='m-5'>
                        <label className='m-3 text-primary'><b>Re-stock this product:</b> </label>
                        <input type="number" ref={itemRef} required placeholder='Amount of product' />
                        <button className='
                        btn btn-warning m-3' onClick={() => handleForm(quantity)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OneItem;