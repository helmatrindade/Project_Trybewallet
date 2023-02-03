import React from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import { getEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => {
      this.validaCampos();
    });
  };

  validaCampos = () => {
    const { email, senha } = this.state;
    const valueMin = 6;
    const verificaEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    const verificarSenha = senha.length >= valueMin;
    const isDisabled = !(verificaEmail && verificarSenha);
    this.setState({
      isDisabled,
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, senha, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            onChange={ this.handleChange }
            name="email"
            type="email"
            data-testid="email-input"
            value={ email }
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            name="senha"
            type="password"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => this.handleClick() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: func.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default connect()(Login);
