import React from "react";
import "./style.css";

const marked = require("marked");

export default function App() {
  return (
    <div>
      <div className="col" id="markdown-container">
        <textarea name="input-area" id="editor" cols="" rows="" />
      </div>
      <div className="col">
        <div id="preview" className="output-area">
          <p id="display"> </p>
        </div>
      </div>
    </div>
  );
}
