import { MangaItem } from '../MangaItem';
import { Container } from './styles';

export function PagesContents() {
  return (
    <Container>
      <MangaItem title="manga 1" />
      <MangaItem title="manga 2" />
      <MangaItem title="manga 3" />
    </Container>
  );
}
