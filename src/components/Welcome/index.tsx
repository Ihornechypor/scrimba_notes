import { nanoid } from 'nanoid';
import * as Styled from './Welcome.styles';

interface WelcomeProps {
  text: string;
  handleEditorValue: ({ id, note, active }: any) => void;
}

const Welcome = ({ text, handleEditorValue }: WelcomeProps) => {
  return (
    <Styled.WelcomeBox>
      <h1>{text}</h1>
      <button onClick={() => handleEditorValue({ id: nanoid(), note: '', active: true })}>{text}</button>
    </Styled.WelcomeBox>
  );
};

export default Welcome;
