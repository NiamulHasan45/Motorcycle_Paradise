import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

const Item = ({ item }) => {
    const { _id, name, img, description, price, supplier } = item;
    const navigate = useNavigate();

    const navigateToItem = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='one-product-container p-3'>
            <div className='image-container'>
                <img className='w-50' src={img} alt="" />
            </div>
            <div className='content'>
                <h2 className='m-3'>{name}</h2>
                <h3 className='text-primary'>Price: {price}</h3>
                <p>Supplier Name: {supplier}</p>
                <p className='mb-5'><small >{description}</small></p>

                <button onClick={() => navigateToItem(_id)} className='service-button btn btn-primary d-block mx-auto'>Stock Update</button>

            </div>
        </div>
    );
};

export default Item;