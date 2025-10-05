import {useState} from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/DashBoard';
import BookingManagement from '../components/BookingManagement';
import AddCarrier from '../components/Carrier/AddCarrier';
import ViewAllCarrier from '../components/Carrier/ViewAllCarrier';
import Header from '../components/Header';
import AddFlight from '../components/Flight/AddFlight';
import ViewAllFlight from '../components/Flight/ViewAllFlight';


const HomePage=()=>{
  

const role='admin';

const [selectedComponent,setSelectedComponent]=useState('dashboard');

function renderComponent(){

    switch(selectedComponent)
    {
            case 'dashboard': return <Dashboard/>
            case 'addCarrier': return <AddCarrier/>
            case 'viewCarrier':return <ViewAllCarrier/>
            case 'addFlight':return <AddFlight/>
            case 'viewFlight':return <ViewAllFlight/>
            case 'bookingManagement': return <BookingManagement/>
            default: return <Dashboard/>
    }

};


    return (<>
    <Header/>
    <Navbar role={role} onSelect={setSelectedComponent}/>
    <div>{renderComponent()}</div>
    </> 
    );
}

export default HomePage;