import * as Styled from './SideBar.styles';

interface SideBar {
  notes: { id: string; note: string }[];
}

// useEffect(() => {
//   notes;
// }, []);

const SideBar = ({ notes }: SideBar) => {
  return (
    <Styled.SideBar>
      <Styled.SideBarBox>
        <h1>Notes</h1>
        <button>+</button>
      </Styled.SideBarBox>
      <Styled.SideBarList>
        {notes.map((item) => (
          <li key={item.id}>{item.note}</li>
        ))}
      </Styled.SideBarList>
    </Styled.SideBar>
  );
};

export default SideBar;
