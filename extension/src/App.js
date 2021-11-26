import SignIn from './components/SignIn';
import {
    Router,
    Link,
    goBack,
    goTo,
    popToTop
} from "react-chrome-extension-router";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <SignIn />
        </Router>
    </div>
  );
}

export default App;
