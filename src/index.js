import { h, render } from "preact";
import { Router } from "preact-router";

const Home = () => (
 <div>Home</div>
);

const Error = () => (
  <section className="error">
    <h2>Error </h2>
    <p>It looks like we hit a snag.</p>
  </section>
);

export const App = () => (
  <Router>
    <Home path="/" />
    <Error type="404" default />
  </Router>
);

render(<App />, document.querySelector("#app"));
