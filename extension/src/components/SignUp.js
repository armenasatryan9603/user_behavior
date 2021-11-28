import { useEffect, useState } from 'react';
import { signUpRequest } from '../services/UserService';
import { handleEmailValidation } from '../utils';
import './Sign.css';

const SignUp = ({ goto }) => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [message, setMessage] = useState('');
    const isEnabled = name && handleEmailValidation(email) && password && submited;

    useEffect(() => {
        if (email && password && name) {
            setMessage('');
            async function fetchMyAPI() {
                const response = await signUpRequest(name, email, password);
                if (!response.error) {
                    goto("signin");
                } else {
                    setMessage(response.message);
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
                    <label>User Name</label>
                    <input
                        type="text"
                        onChange={(event) => handleInputChange(setName, event.target.value)}
                        className={submited && !name ? 'error' : ''}
                        placeholder="Enter User Name"
                    />
                </div>
                <div className='form-item'>
                    <label>Email</label>
                    <input
                        type="email"
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
                    <button className='submit-button' disabled={isEnabled} onClick={() => setSubmited(true)}>Sign Up</button>
                </div>
                <div className='message'>{message}</div>
                <span className='link' onClick={() => goto("signin")}>Sin In</span>
            </div>
        </>
    );
};

export default SignUp;