import React from 'react';

function UserProfile({ name, email, location, showDetails, onToggle }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      maxWidth: '300px'
    }}>
      <h2>{name}</h2>
      
      <button 
        onClick={onToggle}
        style={{
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
