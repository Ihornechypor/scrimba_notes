import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';

interface EditorProps {
  editorData:
    | {
        id: string;
        note: any;
        active: boolean;
      }
    | undefined;
  handleEditorValue: ({ id, note, active }: { id: string; note: any; active: boolean }) => void;
}
const Editor = ({ editorData, handleEditorValue }: EditorProps) => {
  return (
    <Styled.Editor data-color-mode="light">
      {editorData?.active && (
        <MDEditor
          value={editorData?.note}
          height="100%"
          onChange={(e) => {
            handleEditorValue({ id: editorData?.id, note: e, active: editorData?.active });
          }}
        />
      )}
    </Styled.Editor>
  );
};
export default Editor;
