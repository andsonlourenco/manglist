import { useEffect } from 'react';

import { Layout } from './components/Layout';

import { api } from './services/api';
import { GlobalStyles } from './styles/global';

function App() {
  useEffect(() => {
    api.get('mangas').then(response => console.log(response.data));
  }, []);

  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );
}

export default App;
