import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componenets/Login';
import Header from './componenets/Header';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Home from './componenets/Home';
import Detail from './componenets/Detail';


function App() {
  return (
    <div className="App">
      
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
