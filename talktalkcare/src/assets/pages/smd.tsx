// smd.tsx
import React, { useState } from 'react';
import './SMD.css';  // SMD.css

// 문항 데이터 배열 정의
const questions = [
  "전화번호나 사람이름을 기억하기 힘들다.",
  "어떤 일이 언제까지 기억하지 못할 때가 있다.",
  "며칠 전에 들었던 이야기를 잊는다.",
  "오래 전부터 들었던 이야기를 잊는다.",
  // 추가 문항들...
];

const SMD: React.FC = () => {
  // 각 문항의 응답을 저장할 상태
    const [answers, setAnswers] = useState<Array<string | null>>(new Array(questions.length).fill(null));
  
    // 응답 처리 함수
    const handleAnswer = (index: number, answer: string) => {
      const newAnswers = [...answers];
      newAnswers[index] = answer;
      setAnswers(newAnswers);
    };

  return (
    <div className="smd-container">
      <div className="logo-section">
        <img src="/logo.png" alt="톡톡케어" className="logo" />
        <h1>톡톡케어</h1>
      </div>
      
      <div className="content-section">
        <h2>치매진단 테스트</h2>
        <div className="instruction">
          다음 문항을 읽고 최근 6개월 간의 해당 사항에<br />
          "예" 또는 "아니오"를 선택하시오
        </div>
        
        <div className="questions">
          {questions.map((question, index) => (
            <div key={index} className="question-item">
              <div className="question-text">
                {index + 1}. {question}
              </div>
              <div className="answer-buttons">
                <button 
                  className={`answer-btn ${answers[index] === '예' ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index, '예')}
                >
                  예
                </button>
                <button 
                  className={`answer-btn ${answers[index] === '아니오' ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index, '아니오')}
                >
                  아니오
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SMD;