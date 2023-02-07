import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
// import Table from '../../components/Table';
import Wallet from '../../pages/Wallet';

test('Um campo para selecionar uma categoria (tag) para a despesa', () => {
  renderWithRouterAndRedux(<Wallet />);

  const input = screen.getByTestId('delete-btn');
  expect(btn).toBeInTheDocument();
});
