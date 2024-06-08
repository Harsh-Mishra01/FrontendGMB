import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DocReport from './pages/DocReport';
import Review from './pages/Review';
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/Doc-report" element={<DocReport />} />
          <Route path="/Review Management" element={<Review />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
