import React from "react";

const Form = () => {
  return (
    <div class="container">
      <div>Find your next job</div>
      <form>
        <input type="text" placeholder="Enter a job title or location" />
        <input type="submit" value="Find me a job" />
      </form>
    </div>
  );
};

export default Form;
