import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

test('Teste se a page login renderiza na tela o input email e se o input recebe um email', () => {
  renderWithRouterAndRedux(<Login />);

  const inputEmail = screen.getByTestId('email-input');

  expect(inputEmail).toBeInTheDocument();
});

test('teste se a page login renderiza o input senha e se o input recebe uma senha', () => {
  renderWithRouterAndRedux(<Login />);

  const inputSenha = screen.getByTestId('password-input');

  expect(inputSenha).toBeInTheDocument();
  userEvent.type(inputSenha, 'helma123');
  expect(inputSenha.value).toBe('helma123');
});

test('teste se a page login renderiza um button e ao clicar é redirecionado para a rota /carteira', () => {
  const { history } = renderWithRouterAndRedux(<App />);

  const inputEmail = screen.getByTestId('email-input');
  userEvent.type(inputEmail, 'helmatrybe@trybe.com');

  const inputDeSenha = screen.getByTestId('password-input');
  userEvent.type(inputDeSenha, 'helma123');

  const button = screen.getByRole('button', { name: /entrar/i });
  userEvent.click(button);

  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
});
