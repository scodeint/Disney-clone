import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componenets/Login';
import Header from './componenets/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} /> 
         </Routes>
       </Router>
    </div>
  );
}

export default App;
