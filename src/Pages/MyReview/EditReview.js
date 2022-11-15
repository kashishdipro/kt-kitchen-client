import { Button, Textarea, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const {_id, item, message} = useLoaderData();
    const [itemInfo, setItemInfo] = useState([]);
    const {image, name} = itemInfo;
    
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    fetch(`http://localhost:5000/items/${item}`)
    .then(res => res.json())
    .then(data => setItemInfo(data))

    const handleUpdatedReview = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({message: message})
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Review updated successfully');
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))

    }
    return (
        <section className="m-4">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-full rounded-lg bg-neutral-100 shadow-lg">
                    <img className="w-full h-96 md:h-auto md:w-5/12 rounded-t-lg md:rounded-none md:rounded-l-lg bg-neutral-200" src={image} alt="" />
                    <div className="md:w-7/12 p-6 flex flex-col justify-start">
                        <Link to='/myreview'><Button type='sm' className='flex items-center m-auto bg-red-700 hover:bg-red-900 p-2'><FaArrowCircleLeft/> Back</Button></Link>
                        <Typography className="text-neutral-600 md:text-2xl text-xl font-bold mb-2">{name}</Typography>
                        <form onSubmit={handleUpdatedReview}>
                            <div className="flex justify-start items-start gap-4">
                                <div className="w-full h-full">
                                    <Textarea name='message' placeholder={message} defaultValue={message} className='text-neutral-600 bg-neutral-50 border-red-700 focus:border-red-900 text-lg px-2' required/>
                                </div>
                                <button type='submit'><FaArrowCircleRight className='text-red-700 hover:text-red-900'/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditReview;