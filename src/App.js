import React, { Component } from 'react';
//import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Logo from './images/logo.png';
import './App.css';
import ImgLab from './components/MainPage/ImgLab';


class App extends Component {

  render(){
    return(
      <div>
        <ImgLab />
      </div>
    )
  }

  
}

export default App;
