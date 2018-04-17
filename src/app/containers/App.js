// Third-party dependencies
import React from "react";

// Own actions/constants/components
import JumbotronComp from "../components/hero/Jumbotron";
import Hero from "../components/hero/Hero";

function App() {
  return (
    <div className="home-layout">
      <section>
        <JumbotronComp />
      </section>
      <section>
        <Hero name="sectionfirst" title="curriculum" />
      </section>
    </div>
  );
}

export default App;
