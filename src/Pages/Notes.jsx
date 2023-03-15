import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NotesList from "../Components/NotesList";
import SearchBar from "../Components/SearchBar";
import { getActiveNotes, getArchivedNotes } from "../utils/netword-data";
import { setActiveNotes, setArchivedNotes } from "../Store/noteSlice";

const Notes = () => {
  const { activeNotes, archivedNotes } = useSelector((state) => state.notes);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (location.pathname === "/") {
      getActiveNotes().then((res) => {
        dispatch(setActiveNotes(res.data));
      });
    } else {
      getArchivedNotes().then((res) => {
        dispatch(setArchivedNotes(res.data));
      });
    }
    setLoading(false);
  }, [navigate]);

  return (
    <>
      {loading ? (
        <div className="not-found">Loading</div>
      ) : (
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
      )}
    </>
  );
};

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;
