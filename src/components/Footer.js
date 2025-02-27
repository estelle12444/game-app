import React, { useState } from "react";


const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Email submitted:', email);
  };
  
  return (
    <section className="container-fluid ">
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
      <footer className="bg-black text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            {/* Copyright and Designer Info */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <span className="small">
                ©2024 - Tout droit réservé - Designer par NaDin
              </span>
            </div>

            {/* Social Media Links and Legal */}
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                {/* Social Media Icons */}
                <div className="d-flex gap-3 me-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover-opacity"
                  >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover-opacity"
                  >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover-opacity"
                  >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover-opacity"
                  >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                  </a>
                </div>

                {/* Legal Link */}
                <a 
                  href="/mentions-legales" 
                  className="text-white text-decoration-none small hover-opacity"
                >
                  Mention légal
                </a>
              </div>
            </div>
          </div>
        </div>
     </footer>
    </section>
  );
};

export default Footer;