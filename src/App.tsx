import { useEffect, useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import { Main } from './components/Layout';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [notes, setNotes] = useState<{ id: string; note: any; active: boolean }[]>([]);

  const handleEditorValue = (props: { id: string; note: any; active: boolean }) => {
    // eslint-disable-next-line react/prop-types
    const oldData = notes.find((item) => item.id === props.id);
    oldData
      ? setNotes((prev) => prev.map((item) => (item.id === oldData.id ? { ...item, ...props } : { ...item })))
      : setNotes((prev) => [...prev, props]);
  };

  const handleActiveId = (id: string) => {
    setNotes((prev) => prev.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false })));
  };

  const renderSidebar = () => (
    <SideBar notes={notes} handleEditorValue={handleEditorValue} handleActiveId={handleActiveId} />
  );

  useEffect(() => {
    renderSidebar();
  }, [notes]);

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
        {renderSidebar()}
        <div>
          <Editor editorData={notes.find((item) => item.active && item)} handleEditorValue={handleEditorValue} />
        </div>
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
