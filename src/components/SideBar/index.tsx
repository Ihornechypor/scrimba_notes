import * as Styled from './SideBar.styles';

interface SideBar {
  notes: { id: string; note: string }[];
}

const SideBar = ({ notes }: SideBar) => {
  return (
    <Styled.SideBar>
      <Styled.SideBarBox>
        <h1>Notes</h1>
        <button>+</button>
      </Styled.SideBarBox>
      <Styled.SideBarList>
        {notes.map((item, index) => (
          <li key={item.id}>
            <button>Note {index + 1}</button>
          </li>
        ))}
      </Styled.SideBarList>
    </Styled.SideBar>
  );
};

export default SideBar;
