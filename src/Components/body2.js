import { Component } from 'react';

class Body2 extends Component {
    render() {
        const ejercicio = [
            { id: 1, title: "Elemento 1" },
            { id: 2, title: "Elemento 2", },
            { id: 3, title: "Elemento 3", },]
        return (
            <div style={{ background: "#00296b", padding: '1%' }}>
                <h1>

                <ol style={{ margin: 0 }}>

                    {ejercicio.map((p, i) => <li key={i}>{p.title}</li>)}
                </ol>
                </h1>

                <input style={{ padding: '1%',margin: '2%' }} type="button" value="Boton"onClick={()=>{ alert('Hola mundo desde el Botón'); }} />

            </div>
        );
    }
}

export default Body2;
