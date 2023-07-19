import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';

interface EditorProps {
  editorValue: any;
  handleEditorValue: (value: any) => void;
}
const Editor = ({ editorValue, handleEditorValue }: EditorProps) => {
  return (
    <Styled.Editor data-color-mode="light">
      <MDEditor value={editorValue} height="100%" onChange={handleEditorValue} />
    </Styled.Editor>
  );
};
export default Editor;
