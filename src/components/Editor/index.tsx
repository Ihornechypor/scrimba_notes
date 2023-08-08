import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';
import { editorTypes } from '../../types';

interface EditorProps {
  temText: string;
  setTempText: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ temText, setTempText }: EditorProps) => {
  return (
    <Styled.Editor data-color-mode="light">
      <MDEditor
        value={temText}
        height="100%"
        onChange={(e) => {
          setTempText(e);
        }}
      />
    </Styled.Editor>
  );
};
export default Editor;
