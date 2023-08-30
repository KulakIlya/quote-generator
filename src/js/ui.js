// import { getQuotes } from './helpers';

import { getQuotes } from './helpers';

// const mainContentRef = document.querySelector('.main-content');
// const quoteRef = document.querySelector('.quote');
// const authorRef = document.querySelector('.author');
// const btnNextRef = document.querySelector('.btn--next');

// const loadingRef = document.getElementById('loading');

// export function showSpinner() {
//   loadingRef.style.visibility = 'visible';
// }

// export function hideSpinner() {
//   loadingRef.style.visibility = 'hidden';
// }

// export function renderQuote({ author, quote }) {
//   authorRef.innerText = author;
//   quoteRef.innerText = quote;
//   mainContentRef.classList.remove('is-hidden');
// }

// btnNextRef.addEventListener('click', getQuotes);

export default class UI {
  constructor() {
    this.mainContentRef = document.querySelector('.main-content');
    this.quoteRef = document.querySelector('.quote');
    this.authorRef = document.querySelector('.author');
    this.btnNextRef = document.querySelector('.btn--next');
    this.loadingRef = document.getElementById('loading');

    this.btnNextRef.addEventListener('click', getQuotes);
  }

  showSpinner() {
    this.loadingRef.style.visibility = 'visible';
  }
  hideSpinner() {
    this.loadingRef.style.visibility = 'hidden';
  }

  renderQuote({ author, quote }) {
    this.authorRef.innerText = author;
    this.quoteRef.innerText = quote;
    this.mainContentRef.classList.remove('is-hidden');
  }
}
