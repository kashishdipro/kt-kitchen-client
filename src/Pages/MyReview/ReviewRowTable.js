import { Avatar, Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

const ReviewRowTable = ({review}) => {
    const {reviewerName, email, message, item} = review;
    const [reviewItem, setReviewItem] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/items/${item}`)
        .then(res => res.json())
        .then(data => setReviewItem(data))
    },[item])
    return (
        <tr>
            <td>
            <div className="flex items-center space-x-3">
                {
                    reviewItem?.image && 
                    <Avatar className='w-12 h-12 bg-neutral-200 lg:inline-block' src={reviewItem.image} alt="avatar" variant="circular"/>
                }
                <div>
                    {
                        reviewItem?.name && 
                        <div className="font-bold text-neutral-600">{reviewItem.name}</div>

                    }
                    {
                        reviewItem?.category && 
                        <div className="text-sm text-neutral-400">{reviewItem.category}</div>
                    }
                </div>
            </div>
            </td>
            <td>
            <span className='font-bold text-neutral-600'>{reviewerName}</span>
            <br/>
            <span className="text-sm text-neutral-400">{email}</span>
            </td>
            <td className='font-lg text-neutral-600'>{message}</td>
            <th>
            <Button className='text-red-700 hover:text-red-900 p-2'><FaPen/></Button>
            <br />
            <Button className='text-red-700 hover:text-red-900 p-2'><FaTrashAlt/></Button>
            {/* <button className="btn btn-warning">{status ? status : 'pending ...'}</button> */}
            </th>
        </tr>
    );
};

export default ReviewRowTable;