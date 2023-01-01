import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailNote from "./Pages/DetailNote";
import Header from "./Components/Header";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";
import { getActiveNotes, getArchivedNotes } from "./utils/local-data";
import SearchBar from "./Components/SearchBar";

function App() {
  const [notes, setNotes] = useState({
    activeNotes: getActiveNotes(),
    archivedNotes: getArchivedNotes(),
  });

  const location = useLocation();

  useEffect(() => {
    setNotes({
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    });
  }, [location]);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Notes notes={notes.activeNotes} />} />
          <Route
            path="/archived"
            element={<Notes notes={notes.archivedNotes} />}
          />
          <Route path="/notes/:noteId" element={<DetailNote />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
