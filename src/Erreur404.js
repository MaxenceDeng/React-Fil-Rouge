import React from "react";
import Titre from "../Titres/TitreH1";
import Button from "react-bootstrap/Button";

const Erreur404 = () => (
    <div className="erreur404">
        <Titre className="erreur404 h1">Erreur404 !</Titre>
        <h3>Vous avez rencontré une erreur, <br/>
            veuillez retourner à la page d'accueil</h3>
    </div>
);

export default Erreur404;
