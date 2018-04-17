import React, { PropTypes } from "react";
import { Button } from "react-bootstrap";

function Hero({ name, title }) {
  return (
    <div className={`_section-full ${name}`}>
      <div className="content">
        <div className="title text-center">
          <h1>{title}</h1>
          <Button bsStyle="success">Más información</Button>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Hero;
