import React, { useState } from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import { MdDone } from "react-icons/md";

const AddNote = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(data);
    navigate("/");
  };

  return (
    <form className="add-new-page__input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-new-page__input__title"
        placeholder="Title..."
        name="title"
        onChange={handleChange}
      />
      <textarea
        className="add-new-page__input__body"
        placeholder="Note..."
        spellCheck="false"
        name="body"
        onChange={handleChange}
      ></textarea>
      <div className="add-new-page__action">
        <button className="action" type="submit" title="simpan">
          <MdDone />
        </button>
      </div>
    </form>
  );
};

export default AddNote;
