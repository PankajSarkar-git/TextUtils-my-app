import React, { useState } from "react";

const TextForm = (props) => {
  const handelUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text convated to Uppercase", "success");
  };
  const handelLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text convated to Lowercase", "success");

  };
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your text Copied", "success");

  };
  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Your extra spaces cleared", "success");

  };
  const handelOnchage = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handelOnchage}
            style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "light" ? "black" : "white" }}
            placeholder="Enter text hare"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            type="submit"
            onClick={handelUppercaseClick}
          >
            Convart to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            type="submit"
            onClick={handelLowercaseClick}
          >
            Convart to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            type="submit"
            onClick={handelClearClick}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            type="submit"
            onClick={handelCopy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            type="submit"
            onClick={handelExtraSpaces}
          >
            Extra Spcaces Clear
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Number of Words {text.length} Numbers of Characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to red</p>
        <p>{text.split(".").length - 1} Line Number</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the Text box above to preview "}</p>
      </div>
    </>
  );
};

export default TextForm;
