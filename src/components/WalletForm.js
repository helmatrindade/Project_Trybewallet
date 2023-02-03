import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoeda } from '../redux/actions';

class WalletForm extends Component {
  state = {
    despesas: '',
    descricao: '',
    moeda: 'USD',
    metodoDePagamento: 'Dinheiro',
    categoria: 'Alimentação',
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

  render() {
    const { currencies } = this.props;
    const { despesas, descricao, moeda, metodoDePagamento, categoria } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="despesas">
            Despesas
            <input
              name="despesas"
              type="text"
              data-testid="value-input"
              value={ despesas }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              name="descricao"
              type="text"
              data-testid="description-input"
              value={ descricao }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select
              data-testid="currency-input"
              name="moeda"
              value={ moeda }
              onChange={ this.handleChange }
            >
              { currencies.map((e) => (
                <option
                  key={ e }
                  value={ e }
                >
                  {e}
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="metodo de pagamento">
            Método de Pagamento
            <select
              data-testid="method-input"
              name="metodoDePagamento"
              value={ metodoDePagamento }
              onChange={ this.handleChange }
            >
              <option value="dinehiro">Dinheiro</option>
              <option value="cartão de credito">Cartão de crédito</option>
              <option value="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="catergoria">
            Categoria
            <select
              data-testid="tag-input"
              name="categoria"
              value={ categoria }
              onChange={ this.handleChange }
            >
              <option value="alimetação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="tranporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
