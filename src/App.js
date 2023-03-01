import './App.css';
import { Component } from 'react';
import Head from './Components/Head';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Head/>
          <Body1/>
          <Body2/>
          <Footer/>

      </div>
    );
  }
}

export default App;
