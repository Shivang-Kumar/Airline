
import SearchPage from '../components/SearchComponent';
import useSearchHandler from '../hooks/useSearchHander';

const HomePage=()=>{
  
    const handleSearch=useSearchHandler();
    return (  <>
    <h1>This is the Home page</h1>
       <SearchPage  onSearch={handleSearch}/>
    </> 
    );
}

export default HomePage;