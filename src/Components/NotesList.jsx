import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return notes.length === 0 ? (
    <div className="notes-list-empty">
      <p>You don't have notes yet</p>
    </div>
  ) : (
    <div className="notes-list">
      {notes &&
        notes.map((note) => {
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

NotesList.propTypes = {
  notes: PropTypes.array,
};

export default NotesList;
