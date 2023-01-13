import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import DetailNote from "./Pages/DetailNote";
import Header from "./Components/Header";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";
import {
  getActiveNotes,
  getArchivedNotes,
  getUserLogged,
} from "./utils/netword-data";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "./Store/userSlice";
import { setTheme } from "./Store/themeSlice";

function App() {
  const [notes, setNotes] = useState({
    activeNotes: [],
    archivedNotes: [],
  });

  const { theme } = useSelector(({ theme }) => theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getActiveNotes().then((res) => {
      setNotes((prevNotes) => {
        return { ...prevNotes, activeNotes: res.data };
      });
    });

    getArchivedNotes().then((res) => {
      setNotes((prevNotes) => {
        return { ...prevNotes, archivedNotes: res.data };
      });
    });
  }, [location]);

  useEffect(() => {
    getUserLogged().then((res) => {
      if (!res.error) {
        dispatch(setLoggedUser(res.data));
      } else {
        navigate("/login");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="app-container" data-theme={theme}>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Notes notes={notes.activeNotes} />} />
          <Route
            path="/archived"
            element={<Notes notes={notes.archivedNotes} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes/:noteId" element={<DetailNote />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
