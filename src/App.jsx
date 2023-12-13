import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/homepage/HomePage';
import DonarsList from './components/newdonarpage/DonarsList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<DonarsList />} />
        {/* <Rout path="/details" element={}/> */}
      </Routes>
    </>
  );
}

export default App;
