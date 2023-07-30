import { nanoid } from 'nanoid';
import React from 'react';
import * as Styled from './SideBar.styles';
import { editorTypes } from '../../types';

interface SideBar {
  notes: editorTypes[];
  currNoteId: string;
  handleCreateNewNote: () => void;
  handleDeleteValue: (id: string) => void;
  setCurrId: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ notes, handleCreateNewNote, handleDeleteValue, currNoteId, setCurrId }: SideBar) => {
  return (
    <Styled.SideBar>
      <Styled.SideBarBox>
        <h1>Notes</h1>
        <button onClick={() => handleCreateNewNote()}>+</button>
      </Styled.SideBarBox>
      <Styled.SideBarList>
        {notes.map((item) => (
          <li key={item.id}>
            <Styled.SideBarItm
              {...(item.id === currNoteId ? { btnActive: true } : {})}
              onClick={() => setCurrId(item.id)}
            >
              {item.note.split('\n')[0]}

              <Styled.SideBarBtn
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  handleDeleteValue(item.id);
                }}
              >
                -
              </Styled.SideBarBtn>
            </Styled.SideBarItm>
          </li>
        ))}
      </Styled.SideBarList>
    </Styled.SideBar>
  );
};

export default SideBar;
