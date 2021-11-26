import { useEffect, useState } from 'react';
import { goTo } from "react-chrome-extension-router";
import SignUp from './SignUp';
import Home from './Home';
import { signInRequest } from '../services/UserService';
import './Sign.css';

const SignIn = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [message, setMessage] = useState('');
    const loadding = email && password && submited;

    useEffect(() => {
        if (email && password) {
            async function fetchMyAPI() {
                const response = await signInRequest(email, password);
                if (!response.error) {
                    goTo(Home);
                } else {
                    setMessage(response.error);
                }
            }
            fetchMyAPI();
        }
    }, [submited]);

    const handleInputChange = (setter, value) => {
        setter(value);
        setSubmited(false);
    };

    return (
        <>
            <div className='form-title'>
                Sign In
            </div>
            <div class="form">
                <div className='form-item'>
                    <label>Email</label>
                    <input
                        type="text"
                        onChange={(event) => handleInputChange(setEmail, event.target.value)}
                        className={submited && !email ? 'error' : ''}
                        placeholder="Enter Email"
                    />
                </div>
                <div className='form-item'>
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(event) => handleInputChange(setPassword, event.target.value)}
                        className={submited && !password ? 'error' : ''}
                        placeholder="Enter Password"
                    />
                </div>
                <div className='form-item'>
                    <button className='submit-button' disabled={loadding} onClick={() => setSubmited(true)}>Sign In</button>
                </div>
                <div className='message'>{message}</div>
                <span className='link' onClick={() => goTo(SignUp)}>Sin Up</span>
            </div>
            
        </>
    );
};

export default SignIn;