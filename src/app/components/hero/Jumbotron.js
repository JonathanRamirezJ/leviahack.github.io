import React from "react";
import { Jumbotron } from "react-bootstrap";

function JumbotronComp() {
  const title = "<Leviahack/>";
  return (
    <Jumbotron className="sectionmain _section-full">
      <h1 className="text-center align-middle title">{title}</h1>
    </Jumbotron>
  );
}

export default JumbotronComp;
