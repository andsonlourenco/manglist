import { Header } from '../Header';
import { Aside } from '../Sidebar';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <Aside />
      <h1>Manglist</h1>
    </Container>
  );
}
