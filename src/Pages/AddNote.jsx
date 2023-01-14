import React from "react";
import { addNote } from "../utils/netword-data";
import { useNavigate } from "react-router-dom";
import { MdDone } from "react-icons/md";
import InputField from "../Components/InputField";
import TextArea from "../Components/TextArea";
import useInput from "../Hooks/useInput";

const AddNote = () => {
  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    navigate("/");
  };

  return (
    <form className="add-new-page__input" onSubmit={handleSubmit}>
      <InputField
        type="text"
        className={"add-new-page__input__title"}
        placeholder="Title..."
        name="title"
        value={title}
        onChange={onTitleChange}
      />
      <TextArea
        className={"add-new-page__input__body"}
        placeholder="Note..."
        name="body"
        value={body}
        onChange={onBodyChange}
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
