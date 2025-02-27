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
import CategorieDetails from "./components/CategorieDetails";
import './styles/style.css';

import QuizPage from "./components/QuizPage"; 

function App() {
  const domaines = [
        {
        id: "culture-generale",
        subcategories: [
          { title: "Histoire & Politique", emoji: "🏛️", description: "Découvrez les événements marquants." },
          { title: "Géographie", emoji: "🌍", description: "Testez vos connaissances en géographie." },
          { title: "Culture & Traditions", emoji: "🎭", description: "Explorez les cultures du monde." },
          { title: "Bonus", emoji: "💡", description: "Des questions surprises !" },
          { title: "Sport & Divertissement", emoji: "⚽", description: "Le monde du sport et des loisirs." }
        ]
      }
    ];
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
              <Route path="/categorie/:id" element={<CategorieDetails domaines={domaines}/>} />
              <Route path="/quiz/:topic" element={<QuizPage />} />
            </Routes>
          <Footer />
      </div>
    </Router>

  );
}

export default App;
