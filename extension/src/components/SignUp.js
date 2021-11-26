import { useEffect, useState } from 'react';
import { goTo } from "react-chrome-extension-router";
import { signUpRequest } from '../services/UserService';
import SignIn from './SignIn';
import './Sign.css';

const SignUp = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [message, setMessage] = useState('');
    const loadding = email && password && submited;

    useEffect(() => {
        if (email && password) {
            setMessage('');
            async function fetchMyAPI() {
                const response = await signUpRequest(email, password);
                if (!response.error) {
                    goTo(SignIn);
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
                Sign Up
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
                    <button className='submit-button' disabled={loadding} onClick={() => setSubmited(true)}>Sign Up</button>
                </div>
                <div className='message'>{message}</div>
                <span className='link' onClick={() => goTo(SignIn)}>Sin In</span>
            </div>
        </>
    );
};

export default SignUp;