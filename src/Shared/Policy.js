import { Typography } from '@material-tailwind/react';
import React from 'react';

const Policy = () => {
    return (
        <section className='block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full'>
            <div className='flex flex-col justify-start w-full'>
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">Privacy Policy</Typography>
                <Typography className="text-neutral-400 md:text-lg text-medium font-semibold">This Privacy Policy explains what personal information we hold about you, how we collect it, and how we use and may share information about you.</Typography>
            </div>
        </section>
    );
};

export default Policy;