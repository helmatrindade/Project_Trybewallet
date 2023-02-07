import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import WalletForm from '../../components/WalletForm';
import { renderWithRouterAndRedux } from './renderWith';
import Wallet from '../../pages/Wallet';

test('teste se o componente Wallet renderiza um campo para adicionar valor da despesa e se ele recebe um valor', () => {
  renderWithRouterAndRedux(<Wallet />);

  const inputValor = screen.getByTestId('value-input');
  expect(inputValor).toBeInTheDocument();

  userEvent.type(inputValor, '20');
});

// test('teste se há um campo para selecionar em qual moeda será registrada a despesa', () => {
//   renderWithRouterAndRedux(<WalletForm />);

//   const inputDespesa = screen.getByTestId('currency-input');

//   expect(inputDespesa).toBeInTheDocument();
// });

// test('teste se há um campo para adicionar qual método de pagamento será utilizado', () => {
//   renderWithRouterAndRedux(<WalletForm />);

//   const moeda = screen.getByTestId('currency-input');

//   expect(moeda).toBeInTheDocument();
// });

test('verifique se é renderizado um botão na tela e se ao clicar é chamada a função handleClick ', () => {
  renderWithRouterAndRedux(<Wallet />);

  const btn = screen.getByRole('button', { name: /Adicionar despesa/i });
  expect(btn).toBeInTheDocument();

  const inputValor = screen.getByTestId('value-input');
  userEvent.type(inputValor, '10');

  const inputDescricao = screen.getByTestId('description-input');
  userEvent.type(inputDescricao, 'comida');
});
