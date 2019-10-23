import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CreateUser from './components/createUser/CreateUser';
import ListUser from './components/listUser/ListUser';

class App extends Component {

  render() {
      
    return (
      <div className="App">
          <Header></Header>
          <br/>
          <CreateUser></CreateUser>
          <br/>
          <ListUser></ListUser>
          <br/>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
