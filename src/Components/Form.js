import React, { useState } from "react";
import JobsData from "./JobsData";

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
      <div>Find your next job</div>
      <form>
        <input
          type="text"
          placeholder="Enter a job title or location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Find me a job" onClick={saveInput} />
      </form>
      <JobsData keyword={keyword} />
    </div>
  );
};

export default Form;
