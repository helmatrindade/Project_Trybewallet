import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Header.css';

class Header extends Component {
  totalSomaDespesas = () => {
    const { expenses } = this.props;
    const soma = expenses.reduce(
      (acc, curr) => {
        const { exchangeRates, currency, value } = curr;
        return acc + (parseFloat(value) * exchangeRates[currency].ask);
      },
      0,
    );
    return soma.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <p className="logo">💸 TrybeWallet</p>
        <div className="despesas">
          <p className="titulo-despesa">💰 Total de despesas:</p>
          <p className="total" data-testid="total-field">
            {parseFloat(this.totalSomaDespesas()).toFixed(2)}
          </p>
          <p className="total" data-testid="header-currency-field">BRL</p>
        </div>
        <p className="email" data-testid="email-field">{email}</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
