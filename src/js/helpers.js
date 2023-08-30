import { fetchQuotes } from './quote-service.js';
import UI from './ui.js';

const ui = new UI();

export const values = [
  'age',
  'alone',
  'amazing',
  'anger',
  'architecture',
  'art',
  'attitude',
  'beauty',
  'best',
  'birthday',
  'business',
  'car',
  'change',
  'communications',
  'computers',
  'cool',
  'courage',
  'dad',
  'dating',
  'death',
  'design',
  'dreams',
  'education',
  'environmental',
  'equality',
  'experience',
  'failure',
  'faith',
  'family',
  'famous',
  'fear',
  'fitness',
  'food',
  'forgiveness',
  'freedom',
  'friendship',
  'funny',
  'future',
  'god',
  'good',
  'government',
  'graduation',
  'great',
  'happiness',
  'health',
  'history',
  'home',
  'hope',
  'humor',
  'imagination',
  'inspirational',
  'intelligence',
  'jealousy',
  'knowledge',
  'leadership',
  'learning',
  'legal',
  'life',
  'love',
  'marriage',
  'medical',
  'men',
  'mom',
  'money',
  'morning',
  'movies',
  'success',
];

function getRandomElem(arr) {
  const randNumber = Math.floor(Math.random() * arr.length);
  return arr[randNumber];
}

export function getQuotes() {
  ui.showSpinner();
  fetchQuotes(getRandomElem(values)).then(data => {
    console.log(data);
    ui.renderQuote(getRandomElem(data));
    ui.hideSpinner();
  });
}
