import React from 'react';

const Card = ({ heading, data }) => {
  const cardStyles = {
    backgroundColor: '#f97316', // Tailwind's bg-orange-500
    color: 'white',
    padding: '1rem',
    borderRadius: '0.75rem', // slightly rounded corners
    minWidth: '250px',
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <div style={{ textAlign: 'center' }}>
          {heading && <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{heading}</div>}
          <div>{data}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
