import { useEffect, useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import { Main } from './components/Layout';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [notes, setNotes] = useState<{ id: string; note: any; active: boolean }[]>(
    () => (localStorage.getItem('savedNotes') && JSON.parse(localStorage.getItem('savedNotes') || '')) || [],
  );

  useEffect(() => localStorage.setItem('savedNotes', JSON.stringify(notes)), [notes]);

  const handleEditorValue = (props: { id: string; note: any; active: boolean }) =>
    setNotes((prev) => [props, ...prev.filter((item) => item.id !== props.id)]);

  const handleActiveId = (id: string) =>
    setNotes((prev) => prev.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false })));

  const findActiveNote = () => notes.find((item) => item.active && item);

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
        <SideBar notes={notes} handleEditorValue={handleEditorValue} handleActiveId={handleActiveId} />
        <Editor editorData={findActiveNote()} handleEditorValue={handleEditorValue} />
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
