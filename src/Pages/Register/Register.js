import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import login from '../../img/login.png'

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            setError('Password should be 6 character or more');
            return;
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            updateProfile(name, photo);
            console.log(user);
        })
        .catch(error => {
            setError(error.message)
            console.error(error)
        })
    }
    const updateProfile = (name, photo) =>{
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }
    return (
        <section className='sm:p-4 md:p-6 w-full'>
            <div className='flex justify-around items-center flex-col md:flex-row gap-4'>
                <img className='w-1/2' src={login} alt="" />
                <form onSubmit={handleRegister} className="space-y-4 w-1/2">
                    <h5 className="text-2xl font-bold text-neutral-600 text-center">Registration</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your name</label>
                        <input type="text" name="name" placeholder="Your name" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your Photo Url</label>
                        <input type="text" name="photoUrl" placeholder="Your Photo Url" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your email</label>
                        <input type="email" name="email" placeholder="Your email" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your password</label>
                        <input type="password" name="password" placeholder="Your password" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <input type="submit" className="w-full text-white bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="Register" />
                    <div className="text-sm font-medium text-rose-600 mb-4">
                        <p>{error}</p>
                    </div>
                    <div className="text-sm font-medium text-neutral-400 mb-4">
                        Already registered? <Link to='/login' className="text-cyan-400 hover:underline">Login</Link>
                    </div>
                </form>
            </div>
            
        </section>
    );
};

export default Register;