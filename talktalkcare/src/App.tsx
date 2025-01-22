import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NewPage from './assets/pages/newpage';
import Test from './assets/pages/test';
import SMCQ from './assets/pages/smcq';
import SMD from './assets/pages/smd';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/new-page">새 페이지로 이동</Link>
          <Link to="/test">치매 진단 테스트로 이동</Link>
        </nav>
        
        <Routes>
          <Route path="/new-page" element={<NewPage someData="테스트 데이터" />} />
          <Route path="/test" element={<Test />} />
          <Route path="/smcq" element={<SMCQ />} />
          <Route path="/smd" element={<SMD />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
