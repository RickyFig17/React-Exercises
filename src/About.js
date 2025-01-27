import React from "react";

// This is the markup syntax called JSX. It is stricter than HTML.
// You can only use it once per function and you have to wrap them into a shared parent, like a <div></div> or an empty wrapper <></>
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br />
        How do you do?
      </p>
    </>
  );
}

export default AboutPage;
