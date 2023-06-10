import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NotesList = ({ notes }) => {
  return (
    <>
      {notes.length === 0 && (
        <div className="notes-list-empty">
          <p>You don't have notes yet</p>
        </div>
      )}
      <div className="notes-list">
        {notes.length > 0 &&
          notes.map(({id, title, body, createdAt}) => {
            return (
              <NoteItem
                key={id}
                id={id}
                title={title}
                body={body}
                createdAt={createdAt}
              />
            );
          })}
      </div>
    </>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
};

export default NotesList;
