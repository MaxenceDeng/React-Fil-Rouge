import React, { Component } from "react";
import Titre from "../../../components/Titres/TitreH1";
import Button from "../../../components/Bouton/Bouton";
import Etablissement from "./Etablissement/Etablissement";
import axios from "axios";

class Localisation extends Component {

    state = {
        listeEtablissement: null,
        numeroPageActuel: 1,
        recherche: "",
    }

    rechercheEtablissement = (type) => {
        this.setState({ loading: true })
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(reponse => {
                console.log(reponse)
                this.setState({
                    listeEtablissement: reponse.data.features,
                })
            })
    }


    render() {

        let pagination = [];
        let listeEtablissement = "";
        let listeEtablissementFiltrer = "";
        if (this.state.listeEtablissement) {
            let fin = this.state.listeEtablissement.length / 20;
            if (this.state.listeEtablissement.length % 20 !== 0) fin++;
            for (let i = 1; i <= fin; i++) {
                pagination.push(
                    <Button
                        key={i}
                        typeBtn="btn-secondary"
                        clic={() => this.setState({ numeroPageActuel: i })}
                    >{i}</Button>
                );
            }

            const debutListe = (this.state.numeroPageActuel - 1) * 20;
            const finListe = this.state.numeroPageActuel * 20;
            const listeReduite = this.state.listeEtablissement.slice(debutListe, finListe);
            listeEtablissement = listeReduite.map(etablissement => {
                return (
                    <div key={etablissement.properties.id}>
                        {/* Permet d'afficher toutes les informations */}
                        <Etablissement
                            id={etablissement.properties.id}
                            nom={etablissement.properties.nom}
                            telephone={etablissement.properties.telephone}
                            adresses={etablissement.properties.adresses}
                            horaires={etablissement.properties.horaires}
                            url={etablissement.properties.url}
                        />
                    </div>
                )
            })

            listeEtablissementFiltrer = this.state.listeEtablissement.filter(nom => nom.properties.nom.toLowerCase().includes(this.state.recherche.toLocaleLowerCase())).map(etablissement => {
                return (
                    <div key={etablissement.properties.id}>
                        <Etablissement
                            id={etablissement.properties.id}
                            nom={etablissement.properties.nom}
                            telephone={etablissement.properties.telephone}
                            adresses={etablissement.properties.adresses}
                            horaires={etablissement.properties.horaires}
                            url={etablissement.properties.url}
                        />
                    </div>
                )
            })
        }

        return (
            <div className="localisation">
                <Titre className="localisation">Rechercher un établissement</Titre>
                <h3>Choissisez une catégorie : </h3>
                {/* Les boutons permettant d'accèder aux différentes catégories */}
                <Button typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("mairie")}>Mairie</Button>
                <Button typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("commissariat_police")}>Commissariat de Police</Button>
                <Button typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("pole_emploi")}>Pôle Emploi</Button>
                <Button typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("prefecture")}>Préfecture</Button>
                {
                        <>
                            {
                                this.state.recherche === "" ? listeEtablissement : listeEtablissementFiltrer
                            }
                        </>
                }
                <div className="mb-2">{pagination}</div>
            </div>
        );
    }
}

export default Localisation;

