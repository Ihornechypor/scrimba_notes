import * as Styled from './Welcome.styles';
import { nanoid } from 'nanoid';

interface WelcomeProps {
  text: string;
  handleCreateNewNote: () => void;
}

const Welcome = ({ text, handleCreateNewNote }: WelcomeProps) => {
  return (
    <Styled.WelcomeBox>
      <h1>{text}</h1>
      <button onClick={() => handleCreateNewNote()}>{text}</button>
    </Styled.WelcomeBox>
  );
};

export default Welcome;
