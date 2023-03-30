import React, { useState } from "react";
import JobsData from "./JobsData";
import "./Components.css";

const Form = () => {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const saveInput = (e) => {
    e.preventDefault();
    setKeyword(input);
    setInput("");
  };

  return (
    <div class="container">
      <i class="bi bi-briefcase-fill"></i>
      <h1>Find your next job</h1>
      <form>
        <input
          type="text"
          placeholder="Enter a job title or location"
          class="input-form"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="submit"
          class="form-button"
          value="Find me a job"
          onClick={saveInput}
        />
      </form>
      <JobsData keyword={keyword} />
    </div>
  );
};

export default Form;
