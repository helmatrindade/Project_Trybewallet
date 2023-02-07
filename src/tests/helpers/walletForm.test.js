import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../../components/WalletForm';
import { renderWithRouterAndRedux } from './renderWith';

test('teste se o componente Wallet renderiza um campo para adicionar valor da despesa e se ele recebe um valor', () => {
  renderWithRouterAndRedux(<WalletForm />);

  const inputDespesa = screen.getByTestId('value-input');

  expect(inputDespesa).toBeInTheDocument();
});

// test('', () => {

// });

// test('', () => {

// });

// test('', () => {

// });
