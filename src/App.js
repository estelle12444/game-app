import logo from './logo.svg';
import './App.css';



import { Route,BrowserRouter as Router ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lots from './pages/Lots';
import Winners from './pages/Winners';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lots" element={<Lots />} />
              <Route path="/gagnants" element={<Winners />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          <Footer />
      </div>
    </Router>

  );
}

export default App;
