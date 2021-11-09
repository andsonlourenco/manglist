import { Container } from './styles';

interface MangaItemProps {
  title: string;
}

export function MangaItem({ title }: MangaItemProps) {
  return (
    <Container>
      <img src="" alt="" />
      <h2>{title}</h2>
    </Container>
  );
}
