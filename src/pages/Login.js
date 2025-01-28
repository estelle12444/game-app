import React from "react";

const Login = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Se connecter</h2>
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Se connecter</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
