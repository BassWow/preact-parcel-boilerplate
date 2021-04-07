import { h, render } from "preact";
import { Router } from "preact-router";
import { BeakerIcon } from "@heroicons/react/solid";

const Home = () => (
  <div className="container mx-auto text-center flex items-center justify-center h-screen ">
    <div className="m-auto">
      <h1>Welcome to the Parcel | PREACT | TaildwindCSS Boilerplate!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-800 my-10">
        <div className="flex-shrink-0">
          <BeakerIcon className="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <h1 className="text-3xl font-medium text-white">Boilerplate</h1>
          <p className="text-gray-300">Let's get started!</p>
        </div>
      </div>
    </div>
  </div>
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
