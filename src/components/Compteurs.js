import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur, setCompteur] = useState(5);
  console.log("HELLO");

  return (
    <div className="bgdCompteurs">
      <span>COMPTEUR EXEMPLE </span>
      <button
        onClick={() => {
          setCompteur(compteur + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCompteur(compteur - 1);
        }}
      >
        -
      </button>

      <span> {compteur} </span>
    </div>
  );
};

export default Compteurs;
