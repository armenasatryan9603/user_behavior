import { useEffect, useState } from 'react';
import { signInRequest } from '../services/UserService';
import { getAuthToken, setAuthToken } from '../services/storageService';
import './Sign.css';

const SignIn = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [message, setMessage] = useState('');
    const loadding = email && password && submited;

    useEffect(() => {
        if (getAuthToken()) {
            props.goto('home');
        }
    },[]);

    useEffect(() => {
        if (email && password) {
            async function fetchMyAPI() {
                const response = await signInRequest(email, password);
                if (!response.error) {
                    setAuthToken(response.data);
                    props.goto('home');
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
                <span className='link' onClick={() => props.goto('signup')}>Sin Up</span>
            </div>
            
        </>
    );
};

export default SignIn;