import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
