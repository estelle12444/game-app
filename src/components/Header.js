import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container d-flex justify-content align-items-center">
        <div>
          <h1 className="h4">Logo</h1>
        </div>
          {/* Barre de navigation centrée */}
        <nav className="d-flex justify-content-center align-items-center gap-3 w-100">
          <Link to="/" className="text-light text-decoration-none">Accueil</Link>
          <Link to="#" className="text-light text-decoration-none">Liste des lots</Link>
          <Link to="#" className="text-light text-decoration-none">Liste des gagnants</Link>
        </nav>

        {/* Liens à droite */}
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <Link to="/signup" className="text-light text-decoration-none">S'inscrire</Link>
          <Link to="/login" className="btn btn-light rounded-4 text-decoration-none textOrange fw-bold">connexion</Link>
          <button className="btn btn-sm btn-outline-light  fw-bold">FR/EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;