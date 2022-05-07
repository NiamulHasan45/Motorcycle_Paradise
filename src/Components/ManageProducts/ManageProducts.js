import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageProduct.css'

const ManageProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://fast-thicket-64418.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://fast-thicket-64418.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())

                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    console.log(items);

    return (
        <div  className='inventory'>
            <div className='my-3'>welcome</div>
            <h2 className='mt-5'>Detailed information of the inventory.</h2>

            <div className='manage-one-product'>
                {
                    items.map(item => <div key={item._id} className='one-product p-3 my-5 mx-auto'>

                        <div className='demo-image'>
                            <img className='w-100' src={item.img} alt="" />
                        </div>

                        <div className='one-information'>
                            <div>
                                <h2 className='m-3'>{item.name}</h2>
                                <h3 className='text-primary'>Price: {item.price}</h3>
                                <p>Supplier Name: {item.supplier}</p>
                            </div>

                            <button onClick={() => handleDelete(item._id)} className='service-button btn btn-danger d-block mx-auto'>X</button>

                        </div>
                    </div>)
                }
            </div>
            <Link to='/addProducts'>
                <button className='btn btn-warning text-black px-5 py-3 m-5'><h4>Add a new stock</h4></button>
            </Link>
            

        </div>
    );
};

export default ManageProducts;