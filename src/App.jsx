import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/homepage/HomePage';
import DonorsList from './components/newdonarpage/DonarsList';
import DonorsDetails from './components/donorsdetail/DonorsDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<DonorsList />} />
        <Route path="/details/:id" element={<DonorsDetails/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
