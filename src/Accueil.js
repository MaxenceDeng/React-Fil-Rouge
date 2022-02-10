import React, { Component } from "react";
import Titre from "../../../components/Titres/TitreH1";
import imgAccueil from "../../../assets/images/beffroi.jpg";
import "../../../App.css";


class Accueil extends Component{
    render() {
        return(
            <div className="accueil">
                <Titre>Bienvenue sur le site du Nord !</Titre>
                <h3>Le site vous aidant à trouver les établissements publics du Nord</h3>
                <img alt="" src={imgAccueil} fluid thumbnail style={{width:"70%"}} />
            </div>
        )
    }
}

export default Accueil;
