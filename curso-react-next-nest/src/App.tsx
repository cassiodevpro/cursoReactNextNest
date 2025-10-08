import './styles.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
    <Heading> Ola Mundo
       <button>
      <TimerIcon />
      </button>
      </Heading>
    <p>
        Cassio Moreira de Souza
    </p>
    </>
  )
}