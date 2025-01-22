import React from 'react';

interface NewPageProps {
  someData?: string;  // 선택적 prop으로 정의
}

const NewPage: React.FC<NewPageProps> = () => {
  return (
    <div>
      <h1>새로운 페이지입니다</h1>
    </div>
  );
};

export default NewPage;
