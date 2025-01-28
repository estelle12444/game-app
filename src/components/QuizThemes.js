import React from "react";

const QuizThemes = () => {
  const themes = [
    {
      id: 'culture-generale',
      title: 'Culture Générale',
      description: 'Culture:\n Vrai ou Faux?',
    },
    {
      id: 'histoire',
      title: 'Histoire',
      description: 'Description de l\'histoire',
    },
    {
      id: 'geographie',
      title: 'Géographie',
      description: 'Description de la géographie',
    },
    {
      id: 'video-games',
      title: 'Video Games',
      description: 'Description des video games',
    },
  ];
  return (

    <section className="quiz-section py-5">
    <div className="container text-center">
      <h2 className="section-title display-4 pb-5">
        Explorez les thématiques du <span className="highlight fw-bold">Quiz</span>
      </h2>
      <div className="row justify-content-center mt-5">
        {themes.map((theme, index) => (
          <div className="col-md-3 mb-4" key={index}>
            
             <div className="quiz-card d-flex align-items-center">
                <img
                  src={`/home/${theme.id}.png`}
                  alt={theme.title}
                  className="quiz-image me-2"
                />
                <div className="quiz-content">
                  <h5 className="quiz-title">{theme.title}</h5>
                  <p className="quiz-description">{theme.description}</p>
                  <button className="btn btn-link play-button">
                    Jouer <span className="arrow">→</span>
                  </button>
                </div>
              </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-warning mt-3 voir-plus-button rounded-4 ">
        Voir plus <span className="arrow">→</span>
      </button>
      <div className="pt-5">
        <img src="/home/trait-vague.png  " className="" alt=""/>
      </div>
    </div>
   
  </section>
  );
};

export default QuizThemes;
