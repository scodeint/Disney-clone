import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componenets/Login';
import Header from './componenets/Header';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} /> 
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
