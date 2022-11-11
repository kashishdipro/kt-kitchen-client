import { Avatar, Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

const ReviewRowTable = ({review, handleDelete}) => {
    const {_id, reviewerName, email, message, item} = review;
    const [reviewItem, setReviewItem] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/items/${item}`)
        .then(res => res.json())
        .then(data => setReviewItem(data))
    },[item])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <tr>
            <td className='px-2'>
            <div className="flex md:items-center items-start space-x-3">
                {
                    reviewItem?.image && 
                    <Avatar className='md:w-12 md:h-12 w-8 h-8 bg-neutral-200 lg:inline-block my-2' src={reviewItem.image} alt="avatar" variant="circular"/>
                }
                <div>
                    {
                        reviewItem?.name && 
                        <div className="md:font-semibold font-normal text-neutral-600">{reviewItem.name}</div>

                    }
                    {
                        reviewItem?.category && 
                        <div className="text-sm text-neutral-400">{reviewItem.category}</div>
                    }
                </div>
            </div>
            </td>
            <td className='px-2'>
            <span className='md:font-semibold font-normal text-neutral-600 text-center'>{reviewerName}</span>
            <br/>
            <span className="text-sm text-neutral-400 text-center">{email}</span>
            </td>
            <td className='md:font-lg text-neutral-600 px-2'>{message}</td>
            <th>
            <Button onClick={() =>handleDelete(_id)} className='text-red-700 hover:text-red-900 p-2'><FaTrashAlt/></Button>
            <br />
            <Button className='text-red-700 hover:text-red-900 p-2'><FaPen/></Button>
            </th>
        </tr>
    );
};

export default ReviewRowTable;