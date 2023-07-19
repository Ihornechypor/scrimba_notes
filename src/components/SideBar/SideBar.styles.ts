import { styled } from 'styled-components';
import SideBar from '.';

const SideBar = styled.aside`
  height: 100vh;
  width: 100%;
`;

const SideBarBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const SideBarList = styled.ul``;
export { SideBar, SideBarBox, SideBarList };
