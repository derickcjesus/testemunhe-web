import React from "react";
import { Link } from "react-router-dom";

import bibleMobile from '../../assets/images/bible_mobile.jpg'
import './styles.css'

export default function LandingPage() {
  return (
    <div className="page-home">
      <div className="container">
        <main>
          <p>
            E vocês também <br />
            testemunharão, pois estão <br />
            comigo desde o princípio. <br />
            João 15:27
          </p>

          <h4>Dê aqui o seu testemunho ou leia alguns de outras pessoas</h4>

          <div className="buttons-container">
            <Link to="/testify" className="read-testimony">
              Ler testemunho
            </Link>
            <Link to="/testify-form" className="testify">
              Dar testemunho
            </Link>
          </div>
        </main>

        <img src={bibleMobile} alt="biblia" />
      </div>
    </div>
  );
}
