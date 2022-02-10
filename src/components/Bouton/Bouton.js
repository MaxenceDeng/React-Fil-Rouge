const Bouton = (props) => {
    return (
        <button className="btn btn-outline-dark" onClick={props.clic}>
            {props.children}
        </button>
    );
}
export default Bouton;
