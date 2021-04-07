import { h, render } from "preact";
import { Router } from "preact-router";
import { BeakerIcon } from "@heroicons/react/solid";
import tw, { styled } from "twin.macro";

const BigHeading = styled.h1`
  ${tw`text-2xl font-mono subpixel-antialiased font-bold text-center text-black`}
`;

//const BigHeading =
const Home = () => (
  <div tw="container mx-auto flex items-center justify-center h-screen font-mono">
    <div className="m-auto">
      <BigHeading>
        Welcome to the Parcel | PREACT | TaildwindCSS Boilerplate!
      </BigHeading>
      <div tw="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-800 my-10">
        <div tw="flex-shrink-0">
          <BeakerIcon tw="h-20 w-20 text-red-300" />
        </div>
        <div>
          <h1 tw="text-3xl font-medium text-white">Boilerplate</h1>
          <p tw="text-gray-300">Let's get started!</p>
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
