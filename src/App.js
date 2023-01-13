import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailNote from "./Pages/DetailNote";
import Header from "./Components/Header";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";
import { getUserLogged } from "./utils/netword-data";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "./Store/userSlice";

function App() {
  const { theme } = useSelector(({ theme }) => theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <Route path="/" exact element={<Notes />} />
          <Route path="/archived" element={<Notes />} />
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
