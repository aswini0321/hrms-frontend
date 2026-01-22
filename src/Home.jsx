import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (category) => {
    navigate(`/form/${category}`);
  };

  const handlePreview = () => {
    setShowLogin(true);
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'Sunil@123') {
      navigate('/preview');
    } else {
      setErrorMessage('Only admin can view the data. Wrong username or password.');
    }
  };

  const categories = [
    {
      category: 'A',
      title: 'FILL DATA HERE',
      description:
        '"A GVWV & VSWS inspection was conducted at the Secretariat to review staff attendance, service delivery status, survey progress, infrastructure facilities, and maintenance of registers. The inspection assessed availability and working condition of equipment, internet connectivity, basic amenities, and record-keeping practices. Observations were noted and remarks recorded for necessary follow-up actions."',
    },
  ];

  return (
    <div className="home-container">
      <div className="header">
        <div className="gp-logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg"
            alt="Gram Panchayat Logo"
            className="gp-logo"
          />
          <img
            src="https://1.bp.blogspot.com/-irQqX3tc1p4/XTJhCNHyMuI/AAAAAAAACAw/LMXFVFRV9T0KAlBqG3575Yzrw1eGAnvTACLcBGAs/w1200-h630-p-k-no-nu/IMG_20190720_055335.jpg"
            alt="Gram Panchayat Logo"
            className="gp-logo"
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.n7o7mehQPnME3YyWN7z4IwAAAA?pid=Api&P=0&h=180"
            alt="Gram Panchayat Logo"
            className="gp-logo"
          />
        </div>
        <h1 className="main-heading">GVWV&VSWS INSPECTION REPORT</h1>
        <p className="description">
          Swarna Gramam Swarna Wardu - ASR District
        </p>
        <button onClick={handlePreview} className="preview-button">
          Preview Data
        </button>
      </div>

      {/* Login Section */}
      {showLogin && (
        <div className="login-box">
          <h2>welcome admin</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}

      {/* Categories first */}
      {/* <div className="categories-grid">
        {categories.map(({ category, title, description, icon }) => (
          <div
            key={category}
            onClick={() => handleClick(category)}
            className={`category-card category-${category}`}
          >
            <div className="icon">{icon}</div>
            <h2 className="category-title">{title}</h2>
            <p className="category-description">{description}</p>
          </div>
        ))}
      </div> */}
      {/* Categories first */}
<div className="categories-grid">
  {categories.map(({ category, title, description, icon }) => (
    <div key={category} className={`category-card category-${category}`}>
      <div className="icon">{icon}</div>
      <h2 className="category-title">{title}</h2>
      <p className="category-description">{description}</p>

      {/* New clickable button */}
      <button
        className="open-form-btn"
        onClick={() => handleClick(category)}
      >
        📝 Click to Fill Form
      </button>
    </div>
  ))}
</div>


      {/* Image later */}
      <div className="info-extension">
        <div className="info-image">
          <img
            // src="https://www.dishadaily.com/h-upload/2023/05/30/220251-12.webp"
            src="https://t4.ftcdn.net/jpg/13/59/36/79/360_F_1359367938_FHYAXPEBnKO183kHF1TGP3lINlEnBrBf.jpg"
            alt="HRMS Illustration"
          />
        </div>
      </div>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} GSWS Admin Portal. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
