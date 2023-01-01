import React from "react";
import NotesList from "../Components/NotesList";

const Home = ({ allNotes }) => {
  return <NotesList allNotes={allNotes} />;
};

export default Home;