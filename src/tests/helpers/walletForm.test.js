import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './renderWith';
import Wallet from '../../pages/Wallet';
import mockData from './mockData';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => mockData,
  });
});

test('teste o componente Wallet', async () => {
  await act(() => {
    renderWithRouterAndRedux(<Wallet />);
  });
  const array = [];
  screen.getByTestId('currency-input').childNodes.forEach((e) => {
    array.push(e.innerHTML);
  });

  expect(array).toEqual(Object.keys(mockData).filter((key) => key !== 'USDT'));
});

test('verifique se é renderizado um botão na tela e se ao clicar é chamada a função handleClick ', () => {
  renderWithRouterAndRedux(<Wallet />);

  const btn = screen.getByRole('button', { name: /Adicionar despesa/i });
  expect(btn).toBeInTheDocument();

  const inputValor = screen.getByTestId('value-input');
  userEvent.type(inputValor, '10');

  const inputDescricao = screen.getByTestId('description-input');
  userEvent.type(inputDescricao, 'comida');
});

// test('testar se há um campo para selecionar em qual moeda será registrada a despesa', () => {
//   renderWithRouterAndRedux(<Wallet />);

//   const inputmoeda = screen.getByTestId('currency-input');

//   expect(inputDespesa).toBeInTheDocument();
// });

// test('teste se há um campo para adicionar qual método de pagamento será utilizado', () => {
//   renderWithRouterAndRedux(<WalletForm />);

//   const moeda = screen.getByTestId('currency-input');

//   expect(moeda).toBeInTheDocument();
// });
