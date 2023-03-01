import { Component } from 'react';

class Body2 extends Component {
    render() {
        const ejercicio = [
            { id: 1, title: "Tipos de componentes" },
            { id: 2, title: "Funciones y eventos", },
            { id: 3, title: "Uso de varios componentes", },]
        return (
            <div style={{ background: "#00296b", padding: '4%' }}>
                <h1>En este ejercicio vimos:

                <ol style={{ margin: 0 }}>

                    {ejercicio.map((p, i) => <li key={i}>{p.title}</li>)}
                </ol>
                </h1>
            </div>
        );
    }
}

export default Body2;
