import SignIn from './components/SignIn';
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
} from "react-chrome-extension-router";
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
            {/* <SignIn /> */}
            <Home />
        </Router>
    </div>
  );
}

export default App;
