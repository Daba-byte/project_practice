// smd.tsx
import React from 'react';
import './SMD.css';  // SMD.css

const SMD: React.FC = () => {
  return (
    <div className="smd-container">
      <div className="logo-section">
        <img src="/logo.png" alt="톡톡케어" className="logo" />
        <h1>톡톡케어</h1>
      </div>
      
      <div className="title-section">
        <h2>치매 진단 테스트</h2>
      </div>
      
      <div className="test-section">
        <h3>보호자</h3>
        <div className="test-box">
          SMD
        </div>
      </div>
    </div>
  );
};

export default SMD;