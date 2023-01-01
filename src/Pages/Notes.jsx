import React from "react";
import { Link } from "react-router-dom";
import NotesList from "../Components/NotesList";
import SearchBar from "../Components/SearchBar";
import PropTypes from "prop-types";

const Notes = ({ notes }) => {
  return (
    <section className="homepage">
      <SearchBar />
      <NotesList notes={notes} />
      <div className="homepage__action">
        <Link to={"/add"}>
          <button className="action" title="tambah">
            +
          </button>
        </Link>
      </div>
    </section>
  );
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default Notes;
