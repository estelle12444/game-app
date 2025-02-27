import React from "react";

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
      
    </div>
  );
};

export default Partners;
