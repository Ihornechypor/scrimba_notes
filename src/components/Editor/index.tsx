import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';

interface EditorProps {
  id: string;
  editorValue: any;
  handleEditorValue: (id: string, value: any) => void;
}
const Editor = ({ editorValue, id, handleEditorValue }: EditorProps) => {
  const handleMdValue = (id: string, e: any) => {
    handleEditorValue(id, e);
  };
  return (
    <Styled.Editor data-color-mode="light">
      <MDEditor id={id} value={editorValue} height="100%" onChange={(e) => handleMdValue(id, e)} />
    </Styled.Editor>
  );
};
export default Editor;
