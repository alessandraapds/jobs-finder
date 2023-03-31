import React from "react";
import { ConeStriped } from "react-bootstrap-icons";
import "../Components/Components.css";

const Munich = () => {
  return (
    <div class="container in-construction-page">
      <div class="col">
        <div class="col-6">In construction...</div>
        <div class="col-6">
          <ConeStriped class="in-construction-icon" />
        </div>
      </div>
    </div>
  );
};

export default Munich;
