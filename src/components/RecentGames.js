import React, { useState } from "react";

const RecentGames = () => {
  const [activeTab, setActiveTab] = useState("Tous");

  const tabs = ["Tous", "Culture générale", "Culture sociale", "Nos traditions", "Villes et communes"];
  const games = [
    {
      id: 1,
      title: "Build Your Own Shopping App (Ages 10-13)",
      description: "Créez un compte, choisissez votre thématique et payez votre abonnement.",
      image: "/home/game1.png",
    },
    {
      id: 2,
      title: "Build Your Own Shopping App (Ages 10-13)",
      description: "Créez un compte, choisissez votre thématique et payez votre abonnement.",
      image: "/home/game2.png",
    },
    {
      id: 3,
      title: "Build Your Own Shopping App (Ages 10-13)",
      description: "Créez un compte, choisissez votre thématique et payez votre abonnement.",
      image: "/home/game3.png",
    },
    {
      id: 4,
      title: "Build Your Own Shopping App (Ages 10-13)",
      description: "Créez un compte, choisissez votre thématique et payez votre abonnement.",
      image: "/home/game4.png",
    },
  ];

  return (
    
    <section className="bg-bleu py-5">
      <div className="container">
        <h3 className="text-white text-left mb-4 display-4 fw-bold"><span className="textOrange">Jeux</span> récents</h3>
        <ul className="nav mb-4 ">
        {tabs.map((tab) => (
            <li key={tab} className="nav-item">
                <button key={tab}
                    className={`nav-link  ${
                    activeTab === tab ? " active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            </li>
        ))}
        
      </ul>
        <div className="row">
          
        {games.map((game, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className=" card h-100 shadow-sm py-4 px-4">
              <img
                src={game.image}
                className="card-img-top"
                alt={game.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column  mt-3">
                <h6 className="card-title mb-3 fw-bold">{game.title}</h6>
                <p className="card-text flex-grow-1 ">{game.description}</p>
                <button className="btn btn-light btn-sm rounded-2 textOrange mt-3 fw-bold voir-plus-button">
                  Jouer maintenant
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
    

  );
};

    

export default RecentGames;
