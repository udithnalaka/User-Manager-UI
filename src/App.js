import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {

  render() {
   
    return (
      <div className="App">
          <Header></Header>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
