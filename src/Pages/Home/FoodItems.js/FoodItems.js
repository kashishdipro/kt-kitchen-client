import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';

const FoodItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/items`)
        .then(res => res.json())
        .then(data => {
            setItems(data.limiteditems)
        })
    },[])
    return (
        <section className='flex flex-col items-center my-4'>
            <Typography variant="h2" className="text-red-700 text-5xl text-center font-bold">Our Food Items</Typography>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4 px-4 py-5'>
                {
                    items.map(item =><CardItem
                    key={item._id}
                    item={item}
                    ></CardItem>)
                }
            </div>
            <Button className='bg-red-700 hover:bg-red-900 p-4 '>See All</Button>
        </section>
    );
};

export default FoodItems;