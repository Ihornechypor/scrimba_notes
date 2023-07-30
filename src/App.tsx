import { useEffect, useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import { Main } from './components/Layout';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import GlobalStyle from './styles/globalStyles';
import { onSnapshot, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { notesCollection, db } from './firebase';
import { editorTypes } from './types/index';

function App() {
  const [notes, setNotes] = useState<editorTypes[]>([]);
  const [currNoteId, setCurrId] = useState('');

  useEffect(() => {
    const unsubsctibe = onSnapshot(notesCollection, (snapshot) => {
      const noteArr = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setNotes(noteArr);
    });
    return unsubsctibe;
  }, []);

  const sortedNotes = notes.sort((a, b) => b.updateDate - a.updateDate);

  const handleEditorValue = async (value: string) => {
    const notesRef = doc(db, 'notes', currNoteId);
    await setDoc(notesRef, { note: value, updateDate: Date.now() }, { merge: true });
  };

  const handleCreateNewNote = async () => {
    const newNote = {
      note: "# Type your markdown note's title here",
      createDate: Date.now(),
      updateDate: Date.now(),
    };
    await addDoc(notesCollection, newNote);
  };

  const handleDeleteValue = async (id: string) => {
    await deleteDoc(doc(db, 'notes', id));
  };

  const findActiveNote = () => notes.find((item) => item.id === currNoteId);

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
        <SideBar
          notes={sortedNotes}
          handleCreateNewNote={handleCreateNewNote}
          handleDeleteValue={handleDeleteValue}
          currNoteId={currNoteId}
          setCurrId={setCurrId}
        />
        <Editor editorData={findActiveNote()} handleEditorValue={handleEditorValue} />
      </Split>
    ) : (
      <Welcome text="you don't have notes" handleCreateNewNote={handleCreateNewNote} />
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
