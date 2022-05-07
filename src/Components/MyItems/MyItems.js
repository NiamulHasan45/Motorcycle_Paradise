import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../SharedComponents/Loading/Loading';
import './MyItems.css'

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const url = `https://fast-thicket-64418.herokuapp.com/inventory/?email=${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])

    // useEffect(() => {
    //     const getOrders = async () => {
    //         const url = `https://fast-thicket-64418.herokuapp.com/inventory?email=${user.email}`;
    //         console.log(url)

    //             fetch(url)
    //                 .then(res => res.json())
    //                 .then(data => setItems(data))
    //         }
    //         catch (error) {
    //             console.log(error.message);
    //             if (error.response.status === 401 || error.response.status === 403) {
    //                 signOut(auth);
    //                 navigate('/login')
    //             }
    //         }
    //     }
    //     getOrders();

    // }, [user])

    if (loading) {
        return <Loading></Loading>
    }

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





    return (
        // <div>
        //   {
        //        items.map(item => <div key={item._id} className='one-product p-3 my-5 mx-auto'>

        //        <div className='demo-image'>
        //            <img className='w-100' src={item.img} alt="Image Not Found" />
        //        </div>

        //        <div className='one-information'>
        //            <div>
        //                <h2 className='m-3'>{item.name}</h2>
        //                <h3 className='text-primary'>Price: {item.price}</h3>
        //                <p>Supplier Name: {item.supplier}</p>
        //                <p>Description: {item.description}</p>
        //                <button onClick={() => handleDelete(item._id)} className='service-button btn btn-danger d-block mx-auto'>X</button>
        //            </div>

        //        </div>
        //    </div>)
        //   }

        // </div>
        <div  className='inventory'>
        <div className='my-3'>welcome</div>
        <h2 className='mt-5'>Detailed information of my products.</h2>

        <div className='manage-one-product'>
            {
                items.map(item => <div key={item._id} className='one-product-detail p-3 my-5 mx-auto'>

                    <div className='demo-image'>
                        <img className='w-100' src={item.img} alt="Not found" />
                    </div>

                    <div className='one-information-con'>
                        <div>
                            <h2 className='m-3'>{item.name}</h2>
                            <h3 className='text-primary'>Price: {item.price}</h3>
                            <p>Supplier Name: {item.supplier}</p>
                            <p>Description: {item.description}</p>
                        </div>

                        <button onClick={() => handleDelete(item._id)} className='service-button btn btn-danger d-block mx-auto'>X</button>

                    </div>
                </div>)
            }
        </div>
        

    </div>
    );
};

export default MyItems;