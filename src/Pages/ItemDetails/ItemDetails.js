import { Button, Typography } from '@material-tailwind/react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDna, FaCartPlus } from 'react-icons/fa';
import Review from './Review';
import React from 'react';

const ItemDetails = () => {
    const {image, name, description, ingredients, price, category, _id} = useLoaderData();

    return (
        <section className="m-4">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-full rounded-lg bg-neutral-100 shadow-lg">
                    <img className="w-full h-96 md:h-auto md:w-5/12 rounded-t-lg md:rounded-none md:rounded-l-lg bg-neutral-200" src={image} alt="" />
                    <div className="md:w-7/12 p-6 flex flex-col justify-start">
                    <Typography className="text-neutral-600 md:text-2xl text-xl font-bold mb-2">{name}</Typography>
                    <Typography className="text-neutral-400 md:text-lg text-base font-medium mx-4 mb-4">{description}</Typography>
                    <Typography className="text-neutral-600 md:text-xl text-lg font-semibold mb-4">Ingredients</Typography>
                    <ul>
                        {
                            ingredients.map(ingredient =><li
                            key={ingredient}
                            className="flex justify-start items-center"
                            ><p className='text-red-700 ml-4'>❯</p> <p className='text-neutral-400 text-xl font-medium mx-4'>{ingredient}</p></li>)
                        }
                    </ul>
                    <div className='flex items-center justify-between py-3'>
                    <Typography className='flex items-center text-neutral-600 md:text-2xl text-xl font-bold'><FaDna className='mr-2 w-4 text-red-900'/>{category}</Typography>
                    <Typography className='text-red-700 md:text-2xl text-xl font-bold'>BDT {price}</Typography>
                    <Link to={`/item/${_id}`}><Button size='sm' className='bg-red-700 hover:bg-red-900 p-2'><FaCartPlus/></Button></Link>
                    </div>
                    </div>
                </div>
            </div>
            <Review id={_id}/>
        </section>
    );
};

export default ItemDetails;