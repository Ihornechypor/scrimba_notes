import MDEditor from '@uiw/react-md-editor';
import * as Styled from './Editor.styles';
import { editorTypes } from '../../types';

interface EditorProps {
  editorData: editorTypes | undefined;
  handleEditorValue: (e: any) => void;
}
const Editor = ({ editorData, handleEditorValue }: EditorProps) => {
  return (
    <Styled.Editor data-color-mode="light">
      {editorData?.note && (
        <MDEditor
          value={editorData?.note}
          height="100%"
          onChange={(e) => {
            handleEditorValue(e);
          }}
        />
      )}
    </Styled.Editor>
  );
};
export default Editor;
