import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import ReviewRowTable from './ReviewRowTable';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        if(user?.email){
            console.log(user.email)
            fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('kt-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
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
                console.log(data);
            })
        }
    }
    return (
        <section className='my-5'>
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
        </section>
    );
};

export default MyReview;