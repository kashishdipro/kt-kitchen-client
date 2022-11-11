import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewRowTable from './ReviewRowTable';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user.email])
    return (
        <section className='my-5'>
            <h2>You have reviews: {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className='bg-neutral-100'>
                        <tr className='text-neutral-600'>
                            <th>Items Name</th>
                            <th>Customer Name</th>
                            <th>Customer Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =><ReviewRowTable
                            key={review._id}
                            review={review}
                            ></ReviewRowTable>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyReview;