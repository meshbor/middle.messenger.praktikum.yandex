// import {sum} from './modules/sum';

// const root = document.querySelector('#root');
// root.textContent = sum(6, -1).toString();

import Handlebars from 'handlebars';

const template = `Hello , {{ username }}`;

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(template);

  const html = compiled({ username: 'John Doe' });
  const root = document.querySelector('#app');

  root.innerHTML = html;

  setTimeout(() => {
    const newHtml = compiled({ username: 'hihihih' });
    root.innerHTML = newHtml;
  }, 3000);
});
