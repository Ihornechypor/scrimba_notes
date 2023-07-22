import { css, styled } from 'styled-components';

interface SideBarSylesProps {
  btnActive?: boolean;
}
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

const SideBarList = styled.ul<SideBarSylesProps>`
  list-style: none;
  padding: 0;
`;

const SideBarBtn = styled.button<SideBarSylesProps>`
  display: block;
  width: 100%;
  border: none;
  text-align: left;

  padding: 10px;
  ${(props) =>
    props.btnActive &&
    css`
      background-color: lightblue;
    `}
`;

export { SideBar, SideBarBox, SideBarBtn, SideBarList };
