import { EMAIL_USER, getEmail } from './user';
import {
  fetchMoeda,
  disparaActionMoeda,
  disparaActionMoedaInfo,
  fetchMoedaInfo,
  GET_MOEDA_INFO,
  GET_MOEDA,
} from './moeda';

const ACTION_DELETE = 'ACTION_DELETE';

const actionDelete = (id) => ({
  type: ACTION_DELETE,
  id,
});

export {
  EMAIL_USER,
  getEmail,
  GET_MOEDA,
  fetchMoeda,
  fetchMoedaInfo,
  disparaActionMoeda,
  disparaActionMoedaInfo,
  GET_MOEDA_INFO,
  ACTION_DELETE,
  actionDelete,
};
