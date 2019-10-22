import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CreateUser from './components/createUser/CreateUser';

class App extends Component {

  render() {
   
    return (
      <div className="App">
          <Header></Header>
          <CreateUser></CreateUser>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
