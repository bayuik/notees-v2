import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);

      getActiveNotes().then((res) => {
        dispatch(setActiveNotes(res.data));
          setLoading(false);
      });
    } else {
      getArchivedNotes().then((res) => {
        dispatch(setArchivedNotes(res.data));
        setLoading(false);
      });
    }
  }, []);

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
