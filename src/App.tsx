import { useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import { Main } from './components/Layout';
import SideBar from './components/SideBar';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [editorValue, setEditorValue] = useState();
  const [notes, setNotes] = useState([]);
  const handleEditorValue = (value: any) => setEditorValue(value);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Split
          sizes={[25, 75]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <SideBar notes={notes} />
          <Editor editorValue={editorValue} handleEditorValue={handleEditorValue} />
        </Split>
      </Main>
    </>
  );
}

export default App;