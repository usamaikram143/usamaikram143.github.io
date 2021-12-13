import React from 'react';
import "../css/Home.css";
import picture from "../usama.jpg"

function Home() {
  return (
    <div className="home">
      <div>Usama Ikram</div>
      <div>
          <img src={picture} className="picture"/>
      </div>
    </div>
    

  );
}

export default Home;