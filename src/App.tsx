import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import { Main } from './components/Layout';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [notes, setNotes] = useState<{ id: string; note: any }[]>([]);
  const handleEditorValue = (id: string, value: any) => {
    console.log(id, value);
    setNotes((prev) => {
      return [{ ...prev, id: id, note: value }];
    });
  };

  const renderWorkSpase = () =>
    notes.length !== 0 ? (
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
        <Editor editorValue={notes[0].note} handleEditorValue={handleEditorValue} id={notes[0].id} />
      </Split>
    ) : (
      <Welcome text="you don't have notes" handleEditorValue={handleEditorValue} />
    );

  useEffect(() => {
    renderWorkSpase();
  }, [notes]);

  return (
    <>
      <GlobalStyle />
      <Main>{renderWorkSpase()}</Main>
    </>
  );
}

export default App;
