import React from "react";

const Signup = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">S'inscrire</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Nom</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">S'inscrire</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
