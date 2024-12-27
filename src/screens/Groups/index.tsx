import {Header} from '@components/Header';
import {Highlight} from '@components/Highlight';
import {Container} from './styles';

export function Groups(): React.JSX.Element {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
