import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
    
    const peliculas=[
      { id: 1001, title: "Back to the Future"},
      { id: 1652, title: "Home Alone", },
      { id: 1734, title: "Titanic", },]
  return ( 
          
    <div>
      {peliculas.map((p,i)=><h1 key={i}>{p.title}</h1>)}
    </div>
  );}
}

export default App;
