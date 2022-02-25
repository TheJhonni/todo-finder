import React from "react";

function Spinner() {
  return (
    <div id="cont">
      <section id="section">
        <svg id="arturo">
          <filter id="gooey">
            <feGaussinianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10
                                          
                      "
            ></feColorMatrix>
          </filter>
        </svg>
        <div id="loader">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span className="rotate" style={{ "--j": 0 }}></span>
          <span className="rotate" style={{ "--j": 1 }}></span>
          <span className="rotate" style={{ "--j": 2 }}></span>
          <span className="rotate" style={{ "--j": 3 }}></span>
          <span className="rotate" style={{ "--j": 4 }}></span>
        </div>
      </section>
    </div>
  );
}

export default Spinner;
