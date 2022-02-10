import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { withFormik } from "formik";
import * as Yup from "yup";

const formulaireContact = (props) => (
    <div>
        <Form>
            <Form.Group controlId="nom">
                <Form.Label>Nom</Form.Label> <Badge className="bg bg-danger" variant="warning">(min 5 caractères)</Badge>
                <Form.Control
                    type="text"
                    placeholder="Votre nom"
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.nom}
                    onBlur={props.handleBlur}
                />
                {/* Message d'alerte pour aider à la validation du formulaire */}
                {
                    props.touched.nom && props.errors.nom && <span style={{ color: "red" }}>{props.errors.nom}</span>
                }
            </Form.Group>
            <Form.Group controlId="mail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.email && props.errors.email && <span style={{ color: "red" }}>{props.errors.email}</span>
                }
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Votre message</Form.Label> <Badge className="bg bg-danger" variant="warning">(entre 100 et 200 caractères)</Badge>
                <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.message && props.errors.message && <span style={{ color: "red" }}>{props.errors.message}</span>
                }
            </Form.Group>
            <Button variant="danger" onClick={props.handleSubmit}>
                Valider
            </Button>
        </Form>
    </div>
);

// Les interactions liés au formulaire de contact
export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, 'Le nom doit avoir plus de 5 caractères')
            .required("Le nom est obligatoire!"),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire !"),
        message: Yup.string()
            .min(100, "Le message doit faire plus de 100 caractères")
            .max(200, "Le message doit faire moins de 200 caractères")
            .required("Le message est obligatoire !")
    }),
    handleSubmit: (values, { props }) => {
        alert("Message envoyé");
    }
})(formulaireContact);
