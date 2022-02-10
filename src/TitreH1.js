import React from "react";

const TitreH1 = (props) => {
    const monCss = `p-2 m-2 rounded text-center text-black`
    return <h1 className={monCss}>{props.children}</h1>
};

export default TitreH1;

