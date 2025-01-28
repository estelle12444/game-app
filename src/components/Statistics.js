import React from "react";

const Statistics = () => {
  return (
    <section className="bg-black py-5">
        <div className="container text-center text-white">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="textOrange mb-4 display-4 fw-bold">Nos données</h3>
                </div>
                
                    <div className="bg-trans col-md-3 py-3">
                        <div className="data-content">
                            <img src="/home/biblio.png" alt="Marchands" className="data-image" />
                            <h4 className="display-5">+1000</h4>
                        </div>
                        <h4 className="display-7">Marchands accompagnés</h4>
                    </div>
                    <div className=" bg-trans col-md-3 py-3 ">
                        <div className="data-content">
                            <img src="/home/voiture.png" alt="Voitures" className="data-image" />
                            <h4 className="display-5">+1000</h4>
                        </div>
                        <h3 className="display-7">Voitures à gagner</h3>
                    </div>
                    <div className="bg-trans col-md-3 py-3">
                        <div className="data-content">
                            <img src="/home/home.png" alt="Boutiques" className="data-image" />
                            <h4 className="display-5">+1000</h4>
                        </div>
                        <h4 className="display-7">Boutiques partenaires</h4>
                    </div>
            </div>
            
        </div>
    </section>
  );
};

export default Statistics;
