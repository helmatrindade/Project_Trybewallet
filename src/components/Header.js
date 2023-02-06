import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <header>
        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {parseFloat(this.totalSomaDespesas()).toFixed(2)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
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
