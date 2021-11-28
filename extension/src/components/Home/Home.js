import { useEffect, useState } from 'react';
import { addPageUpdateListener, removePageUpdateListener } from '../../services/ChromeService';
import { removeAuthToken, handleChangeDOMScraping, getDOMScrapingState } from '../../services/storageService';
import Switch from '../Switch/Switch';
import './Home.css';


const initialState = getDOMScrapingState();
const Home = (props) => {
    const [activeState, setActiveState] = useState(initialState);

    useEffect(() => {
        if (activeState) {
            addPageUpdateListener();
        }else {
            removePageUpdateListener();
        }
        handleChangeDOMScraping(activeState);
    }, [activeState]);

    const handleLogout = () => {
        removeAuthToken();
        removePageUpdateListener();
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