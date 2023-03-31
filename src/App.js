import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Berlin from "./Views/Berlin";
import Remote from "./Views/Remote";
import Frankfurt from "./Views/Frankfurt";
import Munich from "./Views/Munich";
import Dusseldorf from "./Views/Dusseldorf";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Navbar />}>
          <Route path="berlin" element={<Berlin />} />
          <Route path="frankfurt" element={<Frankfurt />} />
          <Route path="munich" element={<Munich />} />
          <Route path="dusseldorf" element={<Dusseldorf />} />
          <Route path="remote" element={<Remote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
