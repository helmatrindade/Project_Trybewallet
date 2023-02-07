import { GET_MOEDA, GET_MOEDA_INFO } from '../actions/moeda';
import { ACTION_DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MOEDA:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_MOEDA_INFO:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case ACTION_DELETE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.id)],
    };
  default:
    return state;
  }
};

export default wallet;
