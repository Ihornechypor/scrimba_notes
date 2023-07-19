import { nanoid } from 'nanoid';
import * as Styled from './Welcome.styles';

interface WelcomeProps {
  text: string;
  handleEditorValue: (id: string, note: any) => void;
}

const Welcome = ({ text, handleEditorValue }: WelcomeProps) => {
  const handleWelcomeValue = () => handleEditorValue(nanoid(), 'first note');
  return (
    <Styled.WelcomeBox>
      <h1>{text}</h1>
      <button onClick={handleWelcomeValue}>{text}</button>
    </Styled.WelcomeBox>
  );
};

export default Welcome;
