import React from 'react';
import "../css/Home.css";
import picture from "../usama.jpg"

function Home() {
  return (
    <div className="home">
      <div className="name">Usama Ikram</div>
      <div>
          <img src={picture} className="picture"/>
      </div>
      <div> COMPUTER SCIENCE STUDENT</div>
      <footer></footer>
    </div>
    

  );
}

export default Home;