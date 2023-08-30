const BASE_URL = 'https://api.api-ninjas.com/v1/quotes?limit=10&category=';
const API_KEY = 'sGryjH1CycS0NMIp10naPw==519TXZ4Lvpu5IgPD';

const options = {
  method: 'GET',
  headers: { 'X-Api-Key': API_KEY },
  contentType: 'application/json',
};

export function fetchQuotes(topic) {
  return fetch(BASE_URL + topic, options).then(res => res.json());
}
