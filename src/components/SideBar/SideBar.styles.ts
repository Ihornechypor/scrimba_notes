import { styled } from 'styled-components';

const SideBar = styled.aside`
  height: 100vh;
  width: 100%;
`;

const SideBarBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;
`;

const SideBarList = styled.ul`
  list-style: none;
  padding: 0;
  li button {
    display: block;
    width: 100%;
    border: none;
    text-align: left;
    background-color: lightblue;
    padding: 10px;
  }
`;
export { SideBar, SideBarBox, SideBarList };
