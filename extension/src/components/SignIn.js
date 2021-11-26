import { useEffect, useState } from 'react';
import './Signin.css';

export const Signin = () => {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [submited, setSubmited] = useState(false);

    useEffect(() => {
        if (username && password) {
            alert('aaa');    
        }
    }, [submited]);

    return (
        <>
            <div className='form-title'>
                Sign In
            </div>
            <div class="form">
                <div className='form-item'>
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={(event) => setUserName(event.target.value)}
                        className={submited && !username ? 'error' : ''}
                        placeholder="Enter Username"
                    />
                </div>
                <div className='form-item'>
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        className={submited && !password ? 'error' : ''}
                        placeholder="Enter Password"
                    />
                </div>
                <div className='form-item'>
                    <button onClick={() => setSubmited(true)}>Sign In</button>
                </div>                        
            </div>
        </>
    );
};