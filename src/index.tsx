import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/mangas', () => {
      return [
        {
          id: 1,
          title: 'Martial Peak',
          cover: '',
          ref: [
            {
              link: '',
              language: '',
            },
          ],
          lastReadChapter: 1510,
          lastChapterReleased: 1510,
        },
        {
          id: 2,
          title: 'Divine Soul Emperor',
          cover: '',
          ref: [
            {
              link: '',
              language: '',
            },
          ],
          lastReadChapter: 139,
          lastChapterReleased: 139,
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
