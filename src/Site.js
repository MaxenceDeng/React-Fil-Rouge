import React, { Component } from "react";
import Accueil from "./Accueil/Accueil";
import Localisation from "./Localisation/Localisation";
import Contact from "./Contact/Contact";
import Navbar from "../../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Erreur404 from "../../components/Erreur404/Erreur404";
import Footer from "../../components/Footer/Footer"


class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <Navbar />
                    <div className="container">
                        {/* Crée les liens pour pouvoir accèder aux différentes pages */}
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                            <Route path="/localisation" element={<Localisation />} />
                            <Route path="/contact/*" element={<Contact />} />
                            <Route path="*" element={<Erreur404 />} />
                        </Routes>
                    </div>
                    <div className="minSite"></div>
                </div>
                <Footer />
            </>
        );
    }
}
export default Site;
