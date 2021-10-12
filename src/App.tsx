import { useEffect } from 'react';

import { api } from './services/api';

function App() {
  useEffect(() => {
    api.get('mangas').then(response => console.log(response.data));
  }, []);

  return (
    <div className="App">
      <h1>Manglist</h1>
    </div>
  );
}

export default App;
