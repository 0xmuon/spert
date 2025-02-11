import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="conference-header">
        <div className="logo-container">
          <img 
            src="https://i.ibb.co/JWhJB86S/SPERT2025.png" 
            alt="SPERT 2025 Logo" 
            className="conference-logo" 
            width="400" 
            height="150"
          />
        </div>
        
        <div className="conference-info">
          <h1 className="conference-title">IEEE International Conference</h1>
          <h2 className="conference-subtitle">IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025</h2>
          <h3 className="conference-dates">19 Dec - 21 Dec, 2025</h3>
          <h3 className="conference-location">Surat, Gujarat, INDIA</h3>
        </div>

        <div className="logo-container">
          <img 
            src="https://i.ibb.co/DgPtSdG6/svnit-logo.png" // Replace with the actual URL of the second logo
            alt="svnit-logo" 
            className="conference-logo" 
            width="400" 
            height="150"
          />
        </div>
      </div>
      
      <h2 className="tracks-title">Tracks:</h2>
      <ul className="track-list">
        <li>Power converters for Integration of Renewable Energy into the grid, its control and management</li>
        <li>Energy Management and Storage Technologies</li>
        <li>Charging Systems and Infrastructure for Electrical transportation</li>
        <li>Power Converters and Drive systems for Electric Vehicles</li>
        <li>Control and Automation</li>
        <li>Grid resiliency and flexibility</li>
        <li>AI, Big data and Cybersecurity for power, energy and transportation</li>
        <li>Electricity market and regulatory framework</li>
      </ul>

      <div className="conference-description">
        <h2 className="description-title">Conference Overview</h2>
        <p>
          The International Conference on Smart Power, Energy, Renewables, and Transportation aims to explore the integration of advanced energy systems, renewable energy sources, and sustainable transportation solutions. 
        </p>
        <p>
          Topics include smart grid technologies, energy storage, IoT applications in power systems, and the role of artificial intelligence in optimizing energy distribution. The conference also covers renewable energy advancements in solar, wind, and biofuels, alongside the evolution of electric and hybrid vehicles.
        </p>
        <p>
          It highlights sustainable mobility, smart transportation systems, and the environmental impacts of energy technologies. Discussions will focus on policy, regulation, and economic strategies to accelerate the transition toward a cleaner, more efficient energy and transportation future.
        </p>
        <p>
          The event provides a platform for collaboration between experts from academia, industry, and government to drive innovations in these critical sectors.
        </p>
      </div>
    </div>
  );
}

export default Home;