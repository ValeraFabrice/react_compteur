import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur, setCompteur] = useState(1);
  const [compteur2, setCompteur2] = useState(1);

  return (
    <div className="bgdCompteurs">
      <span>COMPTEUR 1 </span>
      <button
        onClick={() => {
          setCompteur(compteur + 1);
        }}
      >
        +
      </button>

      {compteur > 0 ? (
        <button
          onClick={() => {
            setCompteur(compteur - 1);
          }}
        >
          -
        </button>
      ) : null}

      <span> {compteur} </span>
      <span>COMPTEUR 2 </span>
      <button
        onClick={() => {
          setCompteur2(compteur2 + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCompteur2(compteur2 - 1);
        }}
      >
        -
      </button>
      <span> {compteur2} </span>
      <span>TOTAL </span>
      <span> {compteur + compteur2} </span>
    </div>
  );
};

export default Compteurs;
