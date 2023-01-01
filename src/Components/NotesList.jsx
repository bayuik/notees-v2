import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ allNotes }) => {
  
  return (
    <div className="notes-list">
      {allNotes.map((note) => {
        return (
          <NoteItem
            key={note.id}
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
