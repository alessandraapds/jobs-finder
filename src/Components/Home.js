import React from "react";
import Form from "./Form";
import "./Components.css";
import { Search } from "react-bootstrap-icons";

const Home = () => {
  return (
    <div class="container">
      <i class="bi bi-briefcase-fill"></i>
      <h1>
        {" "}
        <Search /> Find your next job
      </h1>
      <Form />
    </div>
  );
};

export default Home;
