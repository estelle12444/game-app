import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "key",
      title: "1. Inscription / Connexion",
      description:
        "Créez un compte, choisissez votre thématique et payez votre abonnement.",
    },
    {
      icon: "mouse-pointer",
      title: "2. Choisissez un jeu",
      description:
        "Choisissez votre thématique et payez votre abonnement.",
    },
    {
      icon: "question-circle",
      title: "3. Répondez correctement aux questions",
      description:
        "Cumulez des points en répondant correctement aux questions.",
    },
    {
      icon: "trophy",
      title: "4. Gagnez des Récompenses",
      description:
        "Recevez des lots et des surprises pour vos efforts.",
    },
  ];
  return (
    <section className="bg-black py-5">
      <div className="container text-center">
        <h3 className="display-4 text-white mb-5">Comment ça marche ?</h3>
        <div className="row my-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-3">
              <div className="card bg-dark text-white h-100 px-3 py-3 ">
                <div className="card-body">
                  {/* <i className={`fas fa-${step.icon} fa-2x mb-3`}></i> */}
                  <img
                  src={`/home/${step.icon}.png`}
                  alt={step.title}
                  className="mb-4"
                />
                  <h5 className="card-title mb-4">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
