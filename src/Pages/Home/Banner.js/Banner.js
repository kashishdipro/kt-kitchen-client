import { Typography } from '@material-tailwind/react';
import React from 'react';
import banner from '../../../img/banner.png'

const Banner = () => {
    return (
        <section className='my-4'>
            <div className="flex flex-col-reverse md:justify-between items-center bg-neutral-100 border rounded-lg shadow-md md:flex-row md:max-w-full hover:bg-neutral-200">
                <div className="flex flex-col p-4 leading-normal">
                    <Typography className="text-red-700 md:text-xl text-lg font-semibold">WELCOME TO OUR</Typography>
                    <Typography className="text-neutral-600 md:text-5xl text-2xl font-bold md:my-4 my-2">Healthy Food Collection!</Typography>
                    <Typography className="text-neutral-400 md:text-lg text-base font-medium">Enjoy a good meal with the best dishes and improve your day.</Typography>
                </div>
                <img className="w-full rounded-t-lg h-96 md:w-5/12 md:rounded-none md:rounded-r-lg" src={banner} alt="Banner"/>
            </div>
        </section>
    );
};

export default Banner;