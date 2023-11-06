import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="tudo-aqui">
        <div className="body-wallet">
          <Header />
          <WalletForm />
        </div>
        <div className="body-tabela">
          <div className="div-1" />
          <div className="div-2"><Table /></div>
        </div>

      </div>
    );
  }
}

export default Wallet;
