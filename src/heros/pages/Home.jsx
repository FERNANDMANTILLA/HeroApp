import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container h-75 justify-content-center align-items-center d-flex animate__animated animate__backInUp animate__slow">
      <div className="w-50 h-auto">
        <div className="row row-cols-2">
          <div className="col d-grid justify-content-center">
            <h1 className="text-center text-danger shadow-text">MARVEL</h1>
            <Link  className="card imagen" to="marvel">
              <img src="http://assets.stickpng.com/images/585f9357cb11b227491c3582.png"
                className="card-img bg-danger object-fit h-100 hover-scale" alt="MARVEL" />
            </Link>
          </div>
          <div className="col d-grid justify-content-center">
            <h1 className="text-center text-warning">DC</h1>
            <Link className="card imagen" to="dc">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png"
                className="card-img bg-warning object-fit h-100 hover-scale" alt="DC" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
