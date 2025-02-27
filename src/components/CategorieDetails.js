import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategorieDetails = ({ domaines }) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const theme = domaines.find((t) => t.id === id);

  if (!theme) {
    return (
        <div className="bg-bleu text-light text-center py-5 bg-orange-image">
           <h2 className="section-title display-5 pb-5 fw-bold">Catégorie pas encore disponible</h2>
        </div>
     );
  }


  return (
    <div className="bg-bleu text-light text-center py-5 bg-orange-image">
          <h2 className="section-title display-5 pb-5 fw-bold">Apprêtez-vous à jouer</h2>
        <div className="categorie-details">
      
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            {theme .subcategories.map((sub, index) => (
             <button
              key={index}
              className={`btn btn-lg rounded-4 px-4 py-2 hover-effect ${
                activeIndex === index ? "btn-warning text-dark" : "btn-primary"
              }`}
              onClick={() => {
                setActiveIndex(index);
                navigate(`/quiz/${sub.title.toLowerCase().replace(/ /g, "-")}`);
              }}
            >
              {sub.emoji} {sub.title}
            </button>
            ))}
        </div>
       
        <button onClick={() => alert("Commencer le quiz")} className="btn btn-outline-warning mt-5 voir-plus-button rounded-4 ">
          Jouer maintenant<span className="arrow">→</span>
        </button>
        </div>
    </div>
  );
};

export default CategorieDetails;
