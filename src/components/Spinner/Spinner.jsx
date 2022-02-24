import React from "react";
import "./spinner.css";

function Spinner() {
  return (
    <div id="cont">
      <section id="section">
        <div className="loader">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          <span id="span5"></span>
          <span id="span6"></span>
          <span id="span7"></span>
          <span id="span8"></span>
        </div>
      </section>
    </div>
  );
}

export default Spinner;
