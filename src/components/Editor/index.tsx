import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';

interface EditorProps {
  id: string | undefined;
  editorValue: any;
  handleEditorValue: (id: string, value: any) => void;
}
const Editor = ({ editorValue, id, handleEditorValue }: EditorProps) => {
  const eahId = id;
  const handleMdValue = (e: any) => {
    console.log(e, eahId);
  };
  return (
    <Styled.Editor data-color-mode="light">
      {console.log(eahId)}
      <MDEditor id={id} value={editorValue.note} height="100%" onChange={(e) => handleMdValue(e)} />
    </Styled.Editor>
  );
};
export default Editor;
