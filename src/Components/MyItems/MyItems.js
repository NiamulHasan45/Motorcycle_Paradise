import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../SharedComponents/Loading/Loading';

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const url = `http://localhost:5000/inventory/?email=${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])

    // useEffect(() => {
    //     const getOrders = async () => {
    //         const url = `http://localhost:5000/inventory?email=${user.email}`;
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





    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam possimus vitae deserunt unde facere quidem iste. Delectus dolores distinctio quae? Quia ullam natus laboriosam aliquam voluptates dolor quis error? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, earum. Illo itaque impedit ducimus id quia ex quo voluptatum nesciunt maiores, recusandae est deserunt? Perferendis, facere sit? Voluptas, officiis consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore harum repudiandae ad modi porro voluptatibus quam non doloribus dolores dolorem error voluptas culpa, fuga possimus perferendis molestias accusantium deleniti maiores quibusdam beatae recusandae facere nesciunt. Blanditiis quo perspiciatis iste ipsa nostrum corporis ut officia ducimus omnis voluptatem doloribus facere, repudiandae, quia, molestias non repellendus cupiditate veniam explicabo laboriosam quam earum ullam. Vitae inventore incidunt ducimus doloremque laboriosam iste necessitatibus ratione fugiat ipsum! Earum excepturi minus error, exercitationem neque ipsa odit, odio, repudiandae repellat cumque accusantium officiis sapiente eveniet? Corrupti dignissimos mollitia hic, distinctio illo quisquam eos ut aut dolore!</p>
            <h2>{items.length}</h2>

        </div>
    );
};

export default MyItems;