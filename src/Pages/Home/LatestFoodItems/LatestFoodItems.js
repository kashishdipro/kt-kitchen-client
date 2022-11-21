import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import CardItem from '../../../Shared/CardItem';

const LatestFoodItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/items`)
        .then(res => res.json())
        .then(data => {
            setItems(data.latestitems)
        })
    },[])
    return (
        <section className='flex flex-col items-center my-4'>
            <Typography variant="h2" className="text-red-700 text-5xl text-center font-bold">Latest Food Items</Typography>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center gap-4 px-4 py-5'>
                {
                    items?.map(item =><CardItem
                    key={item._id}
                    item={item}
                    ></CardItem>)
                }
            </div>
        </section>
    );
};

export default LatestFoodItems;