import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import CardItem from '../../Shared/CardItem';

const AllFoodItems = () => {
    const [items, setItems] = useState([]);

    useTitle('All Items')

    useEffect(() =>{
        fetch(`https://kt-kitchen-server.vercel.app/items`)
        .then(res => res.json())
        .then(data => {
            setItems(data.items)
        })
    },[])
    return (
        <main>
            <section className='flex flex-col items-center my-4'>
            <Typography variant="h2" className="text-red-700 text-5xl text-center font-bold">All Food Items</Typography>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4 px-4 py-5'>
                    {
                        items?.map(item =><CardItem
                        key={item._id}
                        item={item}
                        ></CardItem>)
                    }
                </div>
            </section>
        </main>
    );
};

export default AllFoodItems;