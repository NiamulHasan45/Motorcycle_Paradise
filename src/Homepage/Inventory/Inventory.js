import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import PlanTimeline from '../../Components/PlanTimeline/PlanTimeline';
import Item from '../Items/Item';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://fast-thicket-64418.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data.slice(0,6)))
    }, [])

    // console.log(items);

    return (
        <div >
            <h2 className='my-5'>Currently Available Products</h2>
            <div className='container'>
            {
                items.map(item=><Item key={item._id} item={item}></Item>)
            }
            </div>
            <Link to='/inventory'>
                <button className='btn btn-warning text-black p-3 m-5'>Manage Inventory</button>
            </Link>

            <PlanTimeline></PlanTimeline>
        </div>
    );
};

export default Inventory;