import { Typography } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRowTable from './ReviewRowTable';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useTitle('My Review');

    useEffect(() =>{
        if(user?.email){
            fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res =>  res.json())
            .then(data => setReviews(data))
        }
    },[user?.email, logOut])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully!')
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }
    return (
        <section className='my-5'>
            
            {
                reviews.length !== 0 ?
                <>
                <h2>You have reviews: {reviews?.length} reviews</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead className='bg-neutral-100'>
                            <tr className='text-neutral-600'>
                                <th className='py-4'>Items Info</th>
                                <th>Customer Info</th>
                                <th>Customer Review</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.map(review =><ReviewRowTable
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                ></ReviewRowTable>)
                            }
                        </tbody>
                    </table>
                </div>
                </>
                :
                <div className='flex h-screen w-screen items-center justify-center'>
                    <Typography className='text-red-700 md:text-2xl text-xl font-bold'>No Review Found</Typography>
                </div>
                
            }
        </section>
    );
};

export default MyReview;