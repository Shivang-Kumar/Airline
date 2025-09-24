import {useState} from 'react';
import SideBar from '../components/SideBar';
import Dashboard from '../components/DashBoard';
import FlightManagement from '../components/FlightManagement';
import BookingManagement from '../components/BookingManagement';
import Header from '../components/Header';


const HomePage=()=>{
  

const role='admin';

const [selectedComponent,setSelectedComponent]=useState('dashboard');

function renderComponent(){

    switch(selectedComponent)
    {
            case 'dashboard': return <Dashboard/>
            case 'flightManagement': return <FlightManagement/>
            case 'bookingManagement': return <BookingManagement/>
            default: return <Dashboard/>
    }

};


    return (<>
    <Header/>
    <SideBar role={role} onSelect={setSelectedComponent}/>
    <div>{renderComponent()}</div>
    </> 
    );
}

export default HomePage;