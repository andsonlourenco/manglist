import { Header } from '../Header';
import { PagesContents } from '../PagesContents';
import { Aside } from '../Sidebar';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <Aside />
      <PagesContents />
    </Container>
  );
}
