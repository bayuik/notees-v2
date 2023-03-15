import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import {
  getNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
} from "../utils/netword-data";
import { showFormattedDate } from "../utils";
import { setActiveNotes, setArchivedNotes } from "../Store/noteSlice";

const DetailNote = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getNote(noteId).then(({ data }) => {
      setNote(data);
    });
  }, [noteId]);

  const handleDelete = () => {
    deleteNote(note.id);
    getActiveNotes().then((res) => {
      dispatch(setActiveNotes(res.data));
      navigate("/");
    });
  };

  const handleArchive = () => {
    archiveNote(note.id);
    getArchivedNotes().then((res) => {
      dispatch(setArchivedNotes(res.data));
      navigate("/");
    });
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
