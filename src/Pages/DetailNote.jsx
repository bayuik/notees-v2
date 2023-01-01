import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, archiveNote, deleteNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { MdOutlineDelete } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";

const DetailNote = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState(getNote(noteId));
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  const handleArchive = () => {
    archiveNote(note.id);
    navigate("/");
  };
  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>
      <div className="detail-page__action">
        <button className="action" title="archive" onClick={handleArchive}>
          <IoArchiveOutline />
        </button>
        <button className="action" title="delete" onClick={handleDelete}>
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default DetailNote;
