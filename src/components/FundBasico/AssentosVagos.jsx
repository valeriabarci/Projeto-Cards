import React from "react";

const Alea = props => {
    let { min, max } = props
    let numero = parseInt(Math.random() * (max - min)) + min
    return (
        <React.Fragment>
            <p>
                <b>Número de assentos disponíveis: </b> {numero}
            </p>
        </React.Fragment>
    )
}
export default Alea