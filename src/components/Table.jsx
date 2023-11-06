import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDelete } from '../redux/actions';
import '../styles/Table.css';
import 'font-awesome/css/font-awesome.min.css';

class Table extends Component {
  btnDeletar = (id) => {
    const { dispatch } = this.props;
    dispatch(actionDelete(id));
  };

  render() {
    const { expenses } = this.props;

    return (
      <table className="descr-tabela">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { expenses.map((expense) => {
          const obj = Object.entries(expense.exchangeRates)
            .find((moeda) => moeda[0] === expense.currency);
          const ask = Number(obj[1].ask); // tranformando a strig ask "4.2313" em um numero como Number.
          const total = Number(expense.value) * ask;
          const value = Number(expense.value);
          const { name } = obj[1];
          return (
            <tbody key={ expense.id } className="tabe">
              <tr>
                <td>{expense.description}</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ value.toFixed(2) }</td>
                <td>{ name }</td>
                <td>{ ask.toFixed(2) }</td>
                <td>{ total.toFixed(2) }</td>
                <td>BRL</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    className="btn-deletar"
                    onClick={ () => this.btnDeletar(expense.id) }
                  >
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
