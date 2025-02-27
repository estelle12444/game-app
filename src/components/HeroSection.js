// src/components/HeroSection.js
import React, { useState } from "react";

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    };
  return (
    <section className="bg-bleu text-light text-center pt-5 bg-orange-image">
        <div className="container">
            <h2 className="display-4 fw-bold"><span className="textOrange">Jouez, Cumulez </span>le maximun de points et Gagnez pleins de <span className="textOrange">lots en nature </span>!</h2>
        
            {/* <div className="mt-4">
                <input
                    type="text"
                    className="form-control d-inline-block w-50"
                    placeholder="Rechercher un quiz..."
                />
                <button className="btn btn-light ms-2">Rechercher</button>
                <div className="text-center mt-3">
                    <img src="/home/men.png" alt="Image" className="img-fluid" />
                </div>
            </div> */}
             <div className="container pt-4">
                <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                    <div className="position-relative" style={{ width: '100%', maxWidth: '600px' }}>
                    <input
                        type="text"
                        className="form-control form-control-lg rounded-pill pe-5"
                        placeholder="Rechercher ici..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                        backgroundColor: '#fff',
                        border: 'none',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        paddingLeft: '20px',
                        height: '50px'
                        }}
                    />
                    <button
                        type="submit"
                        className="btn btn-dark rounded-pill position-absolute end-0 top-50 translate-middle-y me-2"
                        style={{
                        height: '40px',
                        width: '120px'
                        }}
                    >
                        Rechercher
                    </button>
                    
                    </div>
                    
                </div>
                </form>
               
                <div className="text-center mt-3">
                    <img src="/home/men.png" alt="Image1" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
