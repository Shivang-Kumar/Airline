import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';

const AppRoute=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}      />
                <Route path="/home" element={<Home/>}   />
            </Routes>
        </Router>
    );
}


export default AppRoute;