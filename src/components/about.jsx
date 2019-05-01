import React from "react";
import Rainbow from "../hoc/rainbow";
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa eos
        sapiente voluptas quibusdam, numquam quos a in, asperiores quam alias ea
        laboriosam consectetur nam at recusandae suscipit eveniet eum?
      </p>
    </div>
  );
};

export default Rainbow(About);
