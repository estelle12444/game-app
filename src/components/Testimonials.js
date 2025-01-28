import React, { useState } from "react";
const testimonials = [
  {
    id: 1,
    name: 'Anaïs TOBO',
    cohort: 'Cohorte #3',
    image: '/home/anais-image.png',
    text: 'Since 2011, Black Girls Code has supported girls of color in tech through coding education and more. We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7-25. Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.'
  },
  {
    id: 2,
    name: 'Bandama Pascale',
    cohort: 'Cohorte #3',
    image: '/home/pascale.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit provident cumque sint explicabo non dolorum! Iste error maxime, mollitia, ex perspiciatis numquam possimus, tempora voluptatibus velit in earum voluptatem incidunt!'
    
  }
];
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
  return (
    <section className="bg-bleu text-light py-5">
      <div className="container">
        <h3 className="mb-5 display-5 fw-bold text-center">Témoignages</h3>
        <div className="row align-items-center justify-content-center pb-5">
        <div className="col-1">
          <button 
            className="btn btn-link text-danger border-0 p-0" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg 
              width="70" 
              height="70" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-danger"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="col-10 col-md-8 ">
          <div className="card bg-transparent border-0">
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <div className="rounded overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              
              <div className="col-md-8 px-3">
                <div className="card-body text-white">
                  <p className="card-text mb-4">
                    {testimonials[currentIndex].text}
                  </p>
                  <h5 className="card-title mb-0">
                    {testimonials[currentIndex].name}
                  </h5>
                  <p className="card-text">
                    <small className="text-white-50">
                      {testimonials[currentIndex].cohort}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1">
          <button 
            className="btn btn-link text-danger border-0 p-0" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg 
              width="70" 
              height="70" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-danger"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src="/home/trait-vague.png" className="" alt=""/>
      </div>
      <div className="container-fluid py-4 mt-5 px-4 bg-orange-image" style={{ backgroundColor: '#FF6B00' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <div className="d-flex align-items-baseline ">
                <h2 className="display-6 mb-0 me-3 text-gray text-justify "> <span className="fw-bold text-dark">+1000 </span>jeux disponibles pour vous permettre de profiter de nombreux lots</h2>
               
              </div>
            </div>
            <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-dark rounded-pill px-4 py-2">
                Je m'inscris maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
