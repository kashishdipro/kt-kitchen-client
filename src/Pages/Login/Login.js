import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import login from '../../img/login.png'

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            const currentUser = {
                email: user.email
            }
            form.reset();
            setError('');
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                localStorage.setItem('kt-token', data.token);
                navigate(from, {replace: true});
            })
        })
        .catch(error => {
            setError(error.message);
        })
        // .finally(() =>{
        //     setLoading(false);
        // })

    }
    return (
        <section className='sm:p-4 md:p-6 w-full'>
            <div className='flex justify-around items-center flex-col md:flex-row gap-4'>
                <img className='w-1/2' src={login} alt="" />
                <form onSubmit={handleLogin} className="space-y-4 w-1/2">
                    <h5 className="text-2xl font-bold text-neutral-600 text-center">Login</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your email</label>
                        <input type="email" name="email" placeholder="Your email" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-neutral-400">Your password</label>
                        <input type="password" name="password" placeholder="Your password" className="bg-gray-50 border border-gray-300 text-neutral-400 text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" required/>
                    </div>
                    <input type="submit" className="w-full text-white bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="Login" />
                    <div className="text-sm font-medium text-rose-600 mb-4">
                        <p>{error}</p>
                    </div>
                    <div className="text-sm font-medium text-neutral-400 mb-4">
                        Not registered? <Link to='/register' className="text-cyan-400 hover:underline">Create account</Link>
                    </div>
                </form>
            </div>
            
        </section>
    );
};

export default Login;