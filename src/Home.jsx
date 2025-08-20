
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// export default function Home() {
//   const navigate = useNavigate();

//   const [showLogin, setShowLogin] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleClick = (category) => {
//     navigate(`/form/${category}`);
//   };

//   const handlePreview = () => {
//     setShowLogin(true);
//     setErrorMessage('');
//   };

//   const handleLogin = () => {
//     if (username === 'grampanchayat' && password === 'admin@123') {
//       navigate('/preview');
//     } else {
//       setErrorMessage('Only admin can view the data. Wrong username or password.');
//     }
//   };

//   const categories = [
//     {
//       category: 'A',
//       title: 'FILL HRMS DATA HERE ',
//       description: '"Centralized Human Resource Management System (HRMS) portal for the Gram Panchayat. Includes details of all functionaries such as employees’ personal information, designation, grade, contact details, and service records. Enables efficient management, monitoring, and reporting of HR data for administrative purposes."',
//     },
    
//   ];

//   return (
//     <div className="home-container">

//       <div className="header">

//       <div className="gp-logo-container">
//     <img

//       src="https://upload.wikimedia.org/wikipedia/commons/a/a8/The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg"
//       alt="Gram Panchayat Logo"
//       className="gp-logo"
//     />
//        <img
//       src="https://1.bp.blogspot.com/-irQqX3tc1p4/XTJhCNHyMuI/AAAAAAAACAw/LMXFVFRV9T0KAlBqG3575Yzrw1eGAnvTACLcBGAs/w1200-h630-p-k-no-nu/IMG_20190720_055335.jpg"
//       alt="Gram Panchayat Logo"
//       className="gp-logo"
//     />
//        <img
//             src="https://tse4.mm.bing.net/th/id/OIP.n7o7mehQPnME3YyWN7z4IwAAAA?pid=Api&P=0&h=180"
//       alt="Gram Panchayat Logo"
//       className="gp-logo"
//     />
//     </div>
//         <h1 className="main-heading">GSWS HRMS FUNCTIONARIES DATA</h1>
//         <p className="description">
//           AlluriSitharamaRaju District - Andhrapradesh
//         </p>
//         <button onClick={handlePreview} className="preview-button">
//           Preview Data
//         </button>
//       </div>

//       {/* Login Section */}
//       {showLogin && (
//         <div className="login-box">
//           <h2>welcome admin</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="login-button" onClick={handleLogin}>
//             Login
//           </button>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </div>
//       )}
//             <div className="info-extension">
//   <div className="info-image">
//     <img
//       src="https://1hr.market/wp-content/uploads/2023/07/HRMS-1.jpg"
//       alt="HRMS Illustration"
//     />
    
//   </div>
  
  
// </div>

//       <div className="categories-grid">
//         {categories.map(({ category, title, description, icon }) => (
//           <div
//             key={category}
//             onClick={() => handleClick(category)}
//             className={`category-card category-${category}`}
//           >
//             <div className="icon">{icon}</div>
//             <h2 className="category-title">{title}</h2>
//             <p className="category-description">{description}</p>
//           </div>
//         ))}
//  </div>
      

// <footer className="footer">
//   <p>&copy; {new Date().getFullYear()} Gram Panchayat Property Portal. All rights reserved.</p>
// </footer>



//     </div>
    
//   );
// }


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
    if (username === 'adminhrms' && password === 'Sunil@123') {
      navigate('/preview');
    } else {
      setErrorMessage('Only admin can view the data. Wrong username or password.');
    }
  };

  const categories = [
    {
      category: 'A',
      title: 'FILL HRMS DATA HERE',
      description:
        '"Centralized Human Resource Management System (HRMS) portal for the Gram Panchayat. Includes details of all functionaries such as employees’ personal information, designation, grade, contact details, and service records. Enables efficient management, monitoring, and reporting of HR data for administrative purposes."',
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
        <h1 className="main-heading">GSWS HRMS FUNCTIONARIES DATA</h1>
        <p className="description">
          AlluriSitharamaRaju District - Andhrapradesh
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
      <div className="categories-grid">
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
      </div>

      {/* Image later */}
      <div className="info-extension">
        <div className="info-image">
          <img
            src="https://1hr.market/wp-content/uploads/2023/07/HRMS-1.jpg"
            alt="HRMS Illustration"
          />
        </div>
      </div>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Gram Panchayat Property Portal. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}



