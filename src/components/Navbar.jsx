import {useState} from 'react';

function Navbar({role='admin',onSelect}){

    const adminMenu=[
        {id:'dashboard', label:'DashBoard' },
        {id:'flightManagement', label:'Flight Management',
        submenu:[
            { id: "addFlight", label: "Add Flight" },
            { id: "viewFlight", label: "View All Flights" }
        ]},
        {id:'bookingManagement', label:'Booking Management'},
        {id:'carrierManagement',label:'Carrier Management',
            submenu:[
            { id: "addCarrier", label: "Add Carrier" },
            { id: "viewCarrier", label: "View All Carriers" },
    ]}
    ];

    const userMenu=[];

        const menuItems=role==='admin'?adminMenu:userMenu;

        const [hovered,setHovered]=useState(null);


    return(

        <nav className="navbar" >
        <ul
        
           style={{
    border: '2px solid blue',
    display: 'flex',
    flexDirection: 'row',       // stack items vertically
    justifyContent: 'space-between',      // optional: centers items vertically in the container
    alignItems: 'center',          // centers items horizontally in the column
    padding: '10px',               // adds padding around content
    backgroundColor: 'red',        // background color
    gap: '10px',                   // adds space between the divs
  }}
        
 >{ menuItems.map((item) => (
            
    <div
    key={item.id}
    onMouseEnter={() => setHovered(item.id)}
    onMouseLeave={() => setHovered(null)}
    >
        <div onClick={() => {if(!item.submenu) onSelect(item.id)}}>{item.label}</div>

        

        {item.submenu && hovered===item.id && item.submenu.map((menu) => {
            return <div key={menu.id} onClick={()=>onSelect(menu.id)}>{menu.label}</div>
        })}


    </div>



        ))}
        </ul>
        </nav>
    );
}

export default Navbar;