const GET_MOEDA = 'GET_MOEDA';

const disparaActionMoeda = (currencies) => ({
  type: GET_MOEDA,
  payload: currencies,
});

const fetchMoeda = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const valor = Object.keys(data).filter((e) => e !== 'USDT');
      dispatch(disparaActionMoeda(valor));
    });
};

export { fetchMoeda, disparaActionMoeda, GET_MOEDA };
