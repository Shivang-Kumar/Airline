const API_BASE="http://localhost:8080";


export async function getFlightsByDate(date)
{

    const response=await fetch(`${API_BASE}/public/flightSchedule/2025-09-29T15:30:00.000000`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    
    });

    const data=await response.json();
    return data;

}



export async function getPassengersByDate(date)
{

    const response=await fetch(`${API_BASE}/public/flightSchedule/2025-09-29T15:30:00.000000`,{
        method:"GET",
        headers:{
         Accept:"application/json"
        }
    });

    const data= await response.json();
    return data;

}


export async function getRevenueByDate(date)
{
    const response= await fetch(`${API_BASE}/public/booking/2025-10-02`,{
   method:"GET",
   headers:{
    Accept:"application/json"
   }
    });

    const data= await response.json();
    return data;
}

export async function getSummaryByDate(date)
{
    const response=await fetch(`${API_BASE}/public/flightSchdule/summary/2025-09-29T15:30:00`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
        
    });
     const data=response.json();
    return data;
   
}