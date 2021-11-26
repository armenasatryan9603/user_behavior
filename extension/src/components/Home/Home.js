import { useEffect, useState } from 'react';
import Switch from '../Switch/Switch';
import { goTo } from "react-chrome-extension-router";
import { setAuthToken } from '../../services/storageService';
import SignIn from '../SignIn';
import './Home.css';

const Home = () => {
    const [activeState, setActiveState] = useState(true);

    useEffect(() => {
        
    }, [activeState]);

    const handleLogout = () => {
        setAuthToken(null);
        goTo(SignIn);
    };

    return (
        <div className='home-page'>
            <div className='home-header'>
                Switch on to track the user behavior
            </div>
            <div className='home-body'>
                <Switch onClick={() => setActiveState(!activeState)} />
            </div>
            <div className='home-footer'>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );

};

export default Home;