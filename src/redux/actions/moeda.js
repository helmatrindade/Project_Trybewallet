const GET_MOEDA = 'GET_MOEDA';
const GET_MOEDA_INFO = 'GET_MOEDA_INFO';

const disparaActionMoeda = (payload) => ({
  type: GET_MOEDA,
  payload,
});

const disparaActionMoedaInfo = (payload, data) => ({
  type: GET_MOEDA_INFO,
  payload: {
    exchangeRates: data,
    ...payload,
  },
});

const fetchMoeda = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const valor = Object.keys(data).filter((e) => e !== 'USDT');
      dispatch(disparaActionMoeda(valor));
    });
};

const fetchMoedaInfo = (payload) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      dispatch(disparaActionMoedaInfo(payload, data));
    });
};

export {
  fetchMoeda,
  disparaActionMoeda,
  disparaActionMoedaInfo,
  fetchMoedaInfo,
  GET_MOEDA,
  GET_MOEDA_INFO,
};
