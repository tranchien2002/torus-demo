import React, { Component } from 'react';
import login from './torus-login.svg';
import logo from './logo.svg';
import getWeb3Torus from './getWeb3Torus';
import './App.css';

class App extends Component {
  login = async () => {
    const web3 = await getWeb3Torus();
    const accounts = await web3.eth.getAccounts();
    alert(accounts);
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Torus demo</p>
          <div>
            <div className='container-custom'>
              <img alt='' src={login} onClick={this.login} className='gif-load' />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
