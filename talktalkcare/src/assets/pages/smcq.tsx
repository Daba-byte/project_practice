// smcq.tsx (smd.tsx도 동일한 구조로 작성)
import React from 'react';
import './SMCQ.css';  // SMD.css

const SMCQ: React.FC = () => {
  return (
    <div className="smcq-container">
      <div className="logo-section">
        <img src="/logo.png" alt="톡톡케어" className="logo" />
        <h1>톡톡케어</h1>
      </div>
      
      <div className="content-section">
        {/* 제목과 설명이 하나의 박스 안에 포함되도록 수정 */}
        <h2>치매진단 테스트</h2>
        <div className="instruction">
          다음 문항을 읽고 최근 6개월 간의 해당 사항에<br />
          "예" 또는 "아니오"를 선택하시오
        </div>
        
        {/* 문항 스타일 수정 */}
        <div className="questions">
          <div className="question-item">
            <div className="question-text">1. 전화번호나 사람이름을 기억하기 힘들다.</div>
            <div className="answer-buttons">
              <button className="answer-btn">예</button>
              <button className="answer-btn">아니오</button>
            </div>
          </div>
          {/* 추가 문항들도 같은 형식으로 작성 */}
        </div>
      </div>
    </div>
  );
};

export default SMCQ;