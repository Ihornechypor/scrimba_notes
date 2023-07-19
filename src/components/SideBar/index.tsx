import * as Styled from './SideBar.styles';
interface SideBar {
  some?: '';
}

const SideBar = ({ some }: SideBar) => {
  return <Styled.SideBar>{some}</Styled.SideBar>;
};

export default SideBar;
