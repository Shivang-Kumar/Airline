import {useNavigate} from "react-router-dom";

function useSearchHandler()
{       
    const navigate=useNavigate();
    const handleSearch= ({from,to,date}) => {
        
        const query=`?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
        navigate(`/searchResults${query}`);
    };

    return handleSearch;

}

export default useSearchHandler; 