import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "home" && <Home />}
    </>
  );
}

export default App;