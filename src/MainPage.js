import React from "react";
import "../src/App.css";

function MainPage() {
  return (
    <div>
    <div>
    </div>
      <div className="lower-card">
        <div className="price-tag">
          <img
            src="https://th.bing.com/th/id/OIP.p2px7BEqJ5jvxoY8Tp3TPQHaEo?w=302&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="card pic"
            className="card-image"
          ></img>
          <div className="price-tag-matter">
          <h1> Wedding planning is difficult!</h1>
          <p style={{color:"red"}}>  Try our professional planner @ just<span> Rs 1499</span> </p>
          <button>Try Now {">"} </button>
          </div>
          
        </div>
        <div className="add-guests">
        <img
            src="https://th.bing.com/th/id/OIP.__gnYP6Dweqpxe8OaiSp1wHaLf?w=127&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="card pic"
            className="card-image2"
          ></img>
          <div className="add-guests-matter">
          <h1> Start your guest list today !</h1>
          <button>Add Guests {">"} </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;
