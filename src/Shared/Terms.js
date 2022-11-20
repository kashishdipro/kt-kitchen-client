import { Typography } from '@material-tailwind/react';
import React from 'react';

const Terms = () => {
    return (
        <section className='block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full'>
            <div className='flex flex-col justify-start w-full'>
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">Terms of Use apply</Typography>
                <Typography className="text-neutral-400 md:text-lg text-medium font-semibold">You should read these Terms of Use carefully before using the Site as they set out your rights and the conditions on which we make the Site available to you.</Typography>
            </div>
        </section>
    );
};

export default Terms;