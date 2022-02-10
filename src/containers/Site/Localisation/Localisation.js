import React, { Component } from "react";
import axios from "axios";
import Titre from "../../../components/Titres/TitreH1";
import Button from "react-bootstrap/Button";
import Etablissement from "./Etablissement/Etablissement";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Localisation extends Component {

    state = {
        recherche: null
    }

    // Permet de récupérer une API mis à disposition par le gouvernement
    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(reponse => {
                this.setState({ recherche: reponse.data.features })
            })
    }

    render() {
        return (
            <div className="localisation">
                <Titre className="localisation">Rechercher un établissement</Titre>
                <h3>Choissisez une catégorie : </h3>
                {/* Les boutons permettant d'accèder aux différentes catégories */}
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('mairie')}>Mairie</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('commissariat_police')}>Commissariat de police</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('pole_emploi')}>Pôle Emploi</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('prefecture')}>Préfecture</Button>
                <Row>
                    {this.state.recherche && this.state.recherche.map(etablissement => {
                        return (
                            <Col md={6} key={etablissement.properties.id}>
                                {/* Permet d'afficher toutes les informations */}
                                <Etablissement
                                    adresses={etablissement.properties.adresses}
                                    horaires={etablissement.properties.horaires}
                                    id={etablissement.properties.id}
                                    nom={etablissement.properties.nom}
                                    telephone={etablissement.properties.telephone}
                                    mail={etablissement.properties.mail}
                                    url={etablissement.properties.url}
                                    />
                            </Col>
                            
                        );
                    })}
                </Row>
            </div>

        );
    }
}
export default Localisation;

