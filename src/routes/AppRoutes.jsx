import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';

const AppRoute=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}      />
                <Route path="/home" element={<Home/>}   />'
                <Route path="/searchResults" element={<ResultsPage/>}   />
            </Routes>
        </Router>
    );
}


export default AppRoute;