import React, { useState } from "react";
import { addNote } from "../utils/netword-data";
import { useNavigate } from "react-router-dom";
import { MdDone } from "react-icons/md";
import InputField from "../Components/InputField";
import TextArea from "../Components/TextArea";

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
      <InputField
        type="text"
        className={"add-new-page__input__title"}
        placeholder="Title..."
        name="title"
        onChange={handleChange}
      />
      <TextArea
        className={"add-new-page__input__body"}
        placeholder="Note..."
        name="body"
        onChange={handleChange}
      />
      <div className="add-new-page__action">
        <button className="action" type="submit" title="simpan">
          <MdDone />
        </button>
      </div>
    </form>
  );
};

export default AddNote;
