import React from 'react'

function Header({ profile }) {
  return (
    <div
      style={{
        border: '2px solid blue',
        display: 'flex',
        justifyContent: 'space-between', // This separates the two divs
        alignItems: 'center',            // Optional: vertically centers the items
        padding: '0 10px',      // Optional: adds some horizontal padding
          backgroundColor: '#f0f8ff',          
      }}
    >
      <div>
        <h3>Airline Management System</h3>
      </div>
      <div>Profile Button</div>
    </div>
  );
}

export default Header
