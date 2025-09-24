

function SideBar({role='admin',onSelect}){

    const adminMenu=[
        {id:'dashboard', label:'DashBoard' },
        {id:'flightManagement', label:'Flight Management'},
        {id:'bookingManagement', label:'Booking Management'}
    ];

    const userMenu=[];

    const menuItems=role==='admin'?adminMenu:userMenu;
    return(
        <nav className="sidebar">
        <ul>{ menuItems.map((item) => (
        <li key={item.id} onClick={()=>{onSelect(item.id)}}>{item.label}</li>
        ))}
        </ul>
        </nav>
    );
}

export default SideBar;