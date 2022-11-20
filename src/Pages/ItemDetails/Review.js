import { Avatar, Textarea, Typography } from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Review = ({id}) => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'undefined';
        const email = user?.email || 'undefined';
        const photo = user?.photoURL || 'undefined';
        const message = form.message.value;

        const review = {
            item: id,
            reviewerName: name,
            photo,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            toast.success('Review added successfully');
            const newReviews = [data, ...reviews];
            setReviews(newReviews);
        })
        .catch(error => console.error(error))
    }

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?item=${id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[id])
    return (
        <div className="block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full">
            {
                reviews?.map(review =>
                    <div key={review._id} className="flex gap-4 border-b mb-2 py-2">
                        <Avatar className='w-14 h-14 bg-neutral-200 lg:inline-block' src={review?.photo} alt="avatar" variant="circular"/>
                        <div className="flex flex-col justify-start w-full">
                            <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">{review?.reviewerName}</Typography>
                            <Typography className="text-neutral-400 md:text-lg text-base font-medium">{review?.message}</Typography>
                        </div>
                    </div>    
                )
            }
            
            {
                user?.uid ?
                <form onSubmit={handleReview}>
                    <div className="flex justify-start items-start gap-4">     
                        <Avatar className='w-10 h-10 bg-neutral-200 lg:inline-block' src={user.photoURL} alt="avatar" variant="circular"/>
                        <div className="w-full">
                            <Textarea name='message' placeholder="Message" className='text-neutral-600 bg-neutral-50 border-red-700 focus:border-red-900 text-lg px-2' required/>
                        </div>
                        <button type='submit'><FaArrowCircleRight className='text-red-700 hover:text-red-900'/></button>
                    </div>
                </form>
                :
                <div className="text-sm font-medium text-neutral-400 mb-4">
                    Are you want to comment? Please <Link to='/login' className="text-red-700 hover:text-red-900 hover:underline">Login</Link>
                </div>
            }
        </div>
    );
};

export default Review;