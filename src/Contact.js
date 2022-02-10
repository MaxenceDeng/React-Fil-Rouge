import React, { Component } from "react";
import Titre from "../../../components/Titres/TitreH1";
import ContactForm from "./ContactForm/ContactForm";
import { Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h2><span class="iconify" data-icon="cil:address-book"></span> Adresse : </h2>
                    xxxxxxxxxxxxxxxx
                    <h2><span class="iconify" data-icon="akar-icons:phone"></span> Téléphone : </h2>
                    00 00 00 00 00
                </div>
                <h2>Vous préfèrez nous écrire ?</h2>
                <Link to="form">
                    <Button variant="danger">Formulaire de contact</Button>
                </Link>
                <Routes>
                    <Route path="form" element={<ContactForm />} />
                </Routes>
            </div>
        );
    }
}

export default Contact;
