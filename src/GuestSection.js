import React from "react";

function GuestSection({ section, count, onAddGuest }) {
  return (
    <div className="card">
      <div className="single-card">
        <img
          src="https://img.favpng.com/5/3/14/vector-graphics-stock-photography-royalty-free-illustration-friendship-png-favpng-WgjG5qcTn9cCJJWbPSmL70YY5.jpg"
          alt="card pic"
          className="card-image3"
        ></img>
        <div className="card-content">
          <h2>{section}</h2>
          <p>{count} guests</p>
        </div>
        <div className="btn">
          <button onClick={onAddGuest}>Add +</button>
        </div>
      </div>
    </div>
  );
}

export default GuestSection;
