import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NotesList from "../Components/NotesList";
import SearchBar from "../Components/SearchBar";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/netword-data";
import { setActiveNotes, setArchivedNotes } from "../Store/noteSlice";

const Notes = () => {
  const { activeNotes, archivedNotes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    getActiveNotes().then((res) => {
      dispatch(setActiveNotes(res.data));
    });

    getArchivedNotes().then((res) => {
      dispatch(setArchivedNotes(res.data));
    });
  }, []);

  return (
    <section className="homepage">
      <SearchBar />
      <NotesList
        notes={location.pathname === "/" ? activeNotes : archivedNotes}
      />
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
  notes: PropTypes.array,
};

export default Notes;
