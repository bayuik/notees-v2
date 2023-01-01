import React from "react";

const NoteItem = ({ title, body, createdAt }) => {
  return (
    <div className="note-item">
      <h3>
        <a href="" className="note-item__title">
          {title}
        </a>
      </h3>
      <p className="note-item_createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

export default NoteItem;
