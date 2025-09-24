
import {useSearchParams} from 'react-router-dom';
import useSearchHandler from '../hooks/useSearchHander';
import SearchComponent from '../components/SearchComponent';
const ResultsPage=()=>{
  const [searchParams]=useSearchParams();


  const from=searchParams.get("from");
  const to=searchParams.get("to");
  const date=searchParams.get("date");

  const handleSearch=useSearchHandler();


  return (
    <>
    <SearchComponent origin={from} destination={to} dateOfTravel={date} onSearch={handleSearch} />
    </>
  )


}

export default ResultsPage;