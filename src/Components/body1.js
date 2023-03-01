import { Component } from 'react';

class Body1 extends Component {
    render() {
        const lenguajes = [
            { id: 1, title: "JavaScript" },
            { id: 2, title: "React JS", },
            { id: 3, title: "js", },]
        return (
            <div style={{ background: "#00509d" ,padding:'4%'}}>
                <h1 >Los siguientes lenguajes estan en un arreglo y son desplegados en una lista:
                <ul style={{ margin: 0}}>

                {lenguajes.map((p,i)=><li key={i}>{p.title}</li>)}
                </ul>

                </h1>
            </div>
        );
    }
}

export default Body1;
