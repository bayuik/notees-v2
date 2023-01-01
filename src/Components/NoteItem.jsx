import React from "react";
import { Link } from "react-router-dom";
import {showFormattedDate} from '../utils'

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item_createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

export default NoteItem;
