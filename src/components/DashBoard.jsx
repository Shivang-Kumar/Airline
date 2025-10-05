import {useState,useEffect} from 'react';
import {getFlightsByDate,getPassengersByDate,getRevenueByDate,getSummaryByDate} from '../services/dashboardService';
import Table from '../components/Table';

import Card from '../components/Card';


const Dashboard = () => {


    const headings=["Flight_ID","Carrier Name","Source","Destination", "Total Passengers","Status"];
    const [tableData,setTableData]=useState([]);
    const dateInput = "2025-09-29"; // value from input
    const date = { date: `${dateInput}T00:00:00` };
     
    const [cardData,setCardsData]=useState([]);



    useEffect(() => {
      
        
    async function  fetchData()
    {


        let todayFlight=0;
        try{
        const response = await getFlightsByDate(date);
        
        if(response.flag==true)
        {
           todayFlight= response.data.length;
        }
    }
        catch(error){
            console.log(error);
        }
  


      let totalPassengerToday=0;
        try{
        const response = await getPassengersByDate();
         let flights=response.data;
        for(let flight of flights)
        {
            for(let booking of flight.bookings)
            {
                totalPassengerToday+=booking.noOfSeats;
            }
        }
        }
        catch(error){
            console.log(error);
        }
        


        let todayRevenue=0;
       
         try{
         const response = await getRevenueByDate();
         if(response.flag==true){
            let allBookings= response.data;
            for(let key in allBookings)
            {
                todayRevenue+=allBookings[key].bookingAmount;
            }
         }
     }
         catch(error){
             console.log(error);
        }

             console.log(todayRevenue);

        setCardsData([
          { heading: "Total Flights TodayXXXX", data: todayFlight },
          { heading: "Total Passengers Today", data: totalPassengerToday },
          { heading: "Today's Revenue", data: `₹ ${todayRevenue}` },
        ]);



        try{
            let response=await getSummaryByDate();
          setTableData(response.data);
            }
        catch(error)
        {
            console.log(error);
        }

    
}

fetchData();

    },[]);



   return (
  <div>
    {/* Card container */}
    <div style={{
      display: 'flex',
       justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '30px'
    }}>
      {cardData.map((card, index) => (
        <div key={index}>
          <Card heading={card.heading} data={card.data} />
        </div>
      ))}
    </div>

    {/* Table */}
    <Table headings={headings} data={tableData} label="Todays Summary"/>
  </div>
);

}
export default Dashboard;
