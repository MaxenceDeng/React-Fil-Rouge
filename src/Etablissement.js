import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Horaires from "./Horaires/Horaires";

const Etablissement = (props) => (
    <div>
        {/* Permet de gèrer l'affichage des informations de l'API */}
        <Card>
            <Card.Header>{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>
                <span class="iconify" data-icon="akar-icons:phone"></span> Telephone : {props.telephone} <br />
                    {props.mail && `Mail : ${props.mail}`}
                </Card.Title>
                <Card.Text>
                    <strong><span class="iconify" data-icon="cil:address-book"></span> Adresse : </strong> <br />
                    {props.adresses[0].lignes[0]} - {props.adresses[0].codePostal} - {props.adresses[0].commune}
                    <br />
                    <strong><span class="iconify" data-icon="bx:bx-time"></span> Horaire : </strong><br />
                    {props.horaires && <Horaires horaires = {props.horaires} />} <br />
                    {props.url && <a href={props.url} className="btn btn-danger" target="_blank">Visiter le site web</a>}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);
export default Etablissement;
