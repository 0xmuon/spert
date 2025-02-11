import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="conference-header">
        <div className="logo-container left">
          <img 
            src='client/assets/SPERT2025.png'
            alt="SPERT 2025 Logo" 
            className="conference-logo" 
          />
        </div>
        
        <div className="conference-info">
          <h1>IEEE International Conference </h1>
          <h2>IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025</h2>
          <h3>19 Dec - 21 Dec, 2025</h3>
          <h3>Surat, Gujarat, INDIA</h3>
        </div>

        {/* Remove NIT_SURAT.svg logo */}
        {/* <div className="logo-container right">
          <img 
            src={process.env.PUBLIC_URL + '/assets/NIT_SURAT.svg'} 
            alt="NIT Surat Logo" 
            className="institution-logo" 
          />
        </div> */}
      </div>
      
      <h2>Tracks:</h2>
      <ul>
        <li>Power converters for Integration of Renewable Energy into the grid, its control and management</li>
        <li>Energy Management and Storage Technologies</li>
        <li>Charging Systems and Infrastructure for Electrical transportation</li>
        <li>Power Converters and Drive systems for Electric Vehicles</li>
        <li>Control and Automation</li>
        <li>Grid resiliency and flexibility</li>
        <li>AI, Big data and Cybersecurity for power, energy and transportation</li>
        <li>Electricity market and regulatory framework</li>
      </ul>
    </div>
  );
}

export default Home; 