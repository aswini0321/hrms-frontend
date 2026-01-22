import React, { useState } from 'react';
import './preview.css';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleDownload = (category) => {
  const url = `https://hrms-backend-36vx.onrender.com/export/${category}`;

  // open backend export URL directly
  window.open(url, "_blank");

  setSuccessMessage(`✅ Category ${category.toUpperCase()} data downloaded successfully!`);
  setTimeout(() => setSuccessMessage(''), 3000);
};

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="preview-container">
      {/* Success Message at Top */}
      {successMessage && (
        <div className="download-message-top">
          {successMessage}
        </div>
      )}

      {/* Back Button */}
      <div className="top-left">
        <button className="back-home-btn" onClick={handleBack}>
          ⬅
        </button>
      </div>

      {/* Heading */}
      <h1 className="preview-heading">Download Functionaries Data</h1>
      <p className="preview-description">
        Welcome Admin....! Just a click away to download data!
      </p>

      {/* Cards */}
      <div className="preview-cards">
        <div className="preview-card" onClick={() => handleDownload('a')}>
          <div className="card-content">
            <div className="icon">🏠</div>
            <h2>HRMS</h2>
            <p>Download HRMS functionaries data</p>
          </div>
        </div>

        {/* <div className="preview-card" onClick={() => handleDownload('b')}>
          <div className="card-content">
            <div className="icon">🎁</div>
            <h2>Category B</h2>
            <p>Gifted/Donated properties with ownership details</p>
          </div>
        </div> */}

        {/* <div className="preview-card" onClick={() => handleDownload('c')}>
          <div className="card-content">
            <div className="icon">📜</div>
            <h2>Category C</h2>
            <p>Vested under APPR Act 1994</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Preview;
