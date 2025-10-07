import './styles.css';
import './styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
    <Heading att1= {123} att2= 'String'> Meu Primeiro Componente</Heading>
    <p>
        Cassio Moreira de Souza
    </p>
    </>
  )
}