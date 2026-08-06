import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vocabulary from "./pages/Vocabulary";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "home" && <Home setPage={setPage} />}
      {page === "vocabulary" && <Vocabulary />}
    </>
  );
}

export default App;