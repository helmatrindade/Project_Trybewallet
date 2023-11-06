import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoeda, fetchMoedaInfo } from '../redux/actions';
import '../styles/WalletForm.css';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,
  };

  componentDidMount() {
    this.fetchApi();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  fetchApi = async () => {
    const { dispatch } = this.props;
    dispatch(fetchMoeda());
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(fetchMoedaInfo(this.state));
    this.setState({ id: id + 1 });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <form className="form-tabela">
          <div className="descricao">
            <label htmlFor="value">
              Valor
              <input
                type="number"
                id="value"
                name="value"
                value={ value }
                data-testid="value-input"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="description">
              Descrição
              <input
                type="text"
                id="description"
                name="description"
                value={ description }
                data-testid="description-input"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="currency">
              Moeda
              <select
                id="currency"
                name="currency"
                value={ currency }
                onChange={ this.handleChange }
                data-testid="currency-input"
              >
                {currencies.map((e) => (
                  <option key={ e } value={ e }>{e}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="descricao">
            <label htmlFor="method">
              Método de pagamento
              <select
                id="method"
                name="method"
                value={ method }
                onChange={ this.handleChange }
                data-testid="method-input"
              >
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="tag">
              Tag
              <select
                id="tag"
                name="tag"
                value={ tag }
                onChange={ this.handleChange }
                data-testid="tag-input"
              >
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>
          </div>
        </form>
        <div className="botao">
          <button
            className="button-7"
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa

          </button>
        </div>
      </>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
