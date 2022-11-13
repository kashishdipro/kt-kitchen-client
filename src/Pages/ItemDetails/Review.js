import { Avatar, Textarea, Typography } from '@material-tailwind/react';
import { useContext } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../img/logo.png'

const Review = ({id}) => {
    const {user} = useContext(AuthContext);

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
            console.log(data)
            if(data.acknowledged){
                form.reset();
            }
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full">
            <div className="flex gap-4 border-b mb-2 py-2">
                <Avatar className='w-10 h-10 bg-neutral-200 lg:inline-block' src={logo} alt="avatar" variant="circular"/>
                <div className="flex items-start w-full">
                <Typography className='md:text-lg text-neutral-600 text-base font-lg'>hello, comment here...</Typography>
                </div>
            </div>
            <div className="flex gap-4 border-b mb-2 py-2">
                <Avatar className='w-10 h-10 bg-neutral-200 lg:inline-block' src={logo} alt="avatar" variant="circular"/>
                <div className="flex items-start w-full">
                <Typography className='md:text-lg text-neutral-600 text-base font-lg'>hello, comment here...</Typography>
                </div>
            </div>
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