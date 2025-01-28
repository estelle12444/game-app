import React, { useState } from "react";

const partners = [
  { id: 1, name: 'Cargill', logo: 'cargill.png' },
  { id: 2, name: 'OFP', logo: 'ofp.png' },
  { id: 3, name: 'SACO', logo: 'saco.png' },
  { id: 4, name: 'UIAP', logo: 'uiap.png' },
  { id: 5, name: 'Reforest Action', logo: 'reforest.png' },
  { id: 6, name: 'CEMOI', logo: 'cemoi.png' },
  { id: 7, name: 'aDryada', logo: 'cargill.png' },
  { id: 8, name: 'aDryada', logo: 'adryada.png' },
  { id: 9, name: 'aDryada', logo: 'uiap.png' },
  { id: 10, name: 'aDryada', logo: 'saco.png' }
];
const Partners = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="container-fluid pt-5">
      {/* Partners Section */}
      <section className="mb-5">
        <h1 className="text-center display-4 mb-4 fw-bold">Nos partenaires</h1>
        <p className="text-center text-muted mb-5 px-5">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam feugiat vitae ultricies
        </p>

        <div className="row justify-content-center align-items-center">
          <div className="logos-scroll-container ">
            <div className="logos-scroll">
              {partners.map((partner) => (
                <div key={partner.id} className="col-6 col-md-3 col-lg-2 text-center">
                  <img
                    src={`/home/logo-partners/${partner.logo}`}
                    alt={partner.name}
                    className="img-fluid"
                    style={{ 
                      maxHeight: '80px',
                      objectFit: 'contain',
                      transition: 'all 0.3s ease'
                    }}
                   
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-5 py-5 bg-image-newsletter ">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row align-items-center">
              {/* Left Column */}
              <div className="col-12 col-md-6 mb-4 mb-md-0 border-vertical">
                <h2 className="h5 mb-2">Newsletter</h2>
                <h3 className="h2 mb-4 fw-bold " style={{ color: '#4A4A4A' }}>
                  Rejoignez la communauté et restez informé des dernières nouvelles
                </h3>
              </div>
              
              {/* Right Column */}
              <div className="col-12 col-md-6 ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control bg-light border-0 py-3"
                      id="email"
                      placeholder="Saisir votre adresse mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn bg-black text-white px-4 py-2"
                    style={{
                      borderRadius: '25px',
                      minWidth: '120px'
                    }}
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
