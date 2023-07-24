import { nanoid } from 'nanoid';
import * as Styled from './SideBar.styles';

interface SideBar {
  notes: { id: string; note: string; active: boolean }[];
  handleEditorValue: ({ id, note, active }: any) => void;
  handleActiveId: (id: string) => void;
}

const SideBar = ({ notes, handleEditorValue, handleActiveId }: SideBar) => {
  return (
    <Styled.SideBar>
      <Styled.SideBarBox>
        <h1>Notes</h1>
        <button onClick={() => handleEditorValue({ id: nanoid(), note: '', active: false })}>+</button>
      </Styled.SideBarBox>
      <Styled.SideBarList>
        {notes.map((item) => (
          <li key={item.id}>
            <Styled.SideBarBtn {...(item.active ? { btnActive: true } : {})} onClick={() => handleActiveId(item.id)}>
              {item.note.length !== 0 ? item.note.split('\n')[0] : 'Empty note'}
            </Styled.SideBarBtn>
          </li>
        ))}
      </Styled.SideBarList>
    </Styled.SideBar>
  );
};

export default SideBar;
