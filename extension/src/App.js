import { useState } from 'react';
import { getAuthToken } from './services/storageService';
import Home from './components/Home/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

const initialPage = getAuthToken() ? 'home' : 'signin';

function App() {
    const [page, setPage] = useState(initialPage);

    const handleNavigation = (e) => setPage(e);

    return (
        <div className="App">
            {page === 'signin' ? <SignIn goto={handleNavigation} /> : ''}
            {page === 'signup' ? <SignUp goto={handleNavigation} /> : ''}
            {page === 'home'   ? <Home goto={handleNavigation} /> : ''}
        </div>
    );
}

export default App;
