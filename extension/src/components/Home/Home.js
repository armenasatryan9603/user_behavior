import { useEffect, useState } from 'react';
import { addPageUpdateListener } from '../../services/ChromeService';
import { getAuthToken, removeAuthToken, handleChangeDOMScraping } from '../../services/storageService';
import Switch from '../Switch/Switch';
import './Home.css';

const Home = (props) => {
    const [activeState, setActiveState] = useState(true);

    useEffect(() => {
        handleChangeDOMScraping(activeState);
    }, [activeState]);

    useEffect(() => {
        if (getAuthToken()) {
            addPageUpdateListener();
        } else {
            props.goto('signin');
        }
    }, []);

    const handleLogout = () => {
        removeAuthToken();
        props.goto('signin');
    };

    return (
        <div className='home-page'>
            <div className='home-header'>
                Switch on to track the user behavior
            </div>
            <div className='home-body'>
                <Switch checked={activeState} onClick={() => setActiveState(!activeState)} />
            </div>
            <div className='home-footer'>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );

};

export default Home;