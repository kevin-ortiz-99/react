import './App.css';
import { Component } from 'react';
import Head from './Components/Head';
import Body2 from './Components/body2';
import Footer from './Components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Head/>
          <Body2/>
          <Footer/>

      </div>
    );
  }
}

export default App;
