import React from 'react'

function Header(profile) {
  return (
    <div style={{ border: '2px solid blue'}}> 
      <div><h3>Airline Management System</h3></div>
      <div>Search Button</div>
      {profile.data}
    </div>
  )
}

export default Header
