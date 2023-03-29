import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JobsData from "./Components/JobsData";

function App() {
  return (
    <div className="App">
      <Home />
      <Form />
      <JobsData />
    </div>
  );
}

export default App;
