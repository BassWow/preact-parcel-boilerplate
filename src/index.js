import { h, render } from "preact";
import { Router } from "preact-router";
//import { useState } from "preact/hooks";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'

import { Cards, Card } from "./components/Cards";


const Home = () => {
  return (
    <div>
      <Cards>
        <Card>
          <div className="card__image">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          </div>
          <div className="card__content_container">
            <div className="card__content_image">
              <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div className="card__content_copy">
              <h2>Card title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                culpa asperiores voluptatem delectus eveniet adipisci
                temporibus? Beatae recusandae dignissimos reiciendis est dolor
                eius excepturi quaerat, quia debitis doloribus velit mollitia?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis at facilis laboriosam vitae eos vel ipsa neque,
                deserunt voluptates quos hic fugiat enim ullam facere reiciendis
                quia architecto assumenda ab.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                eveniet velit accusantium nobis a, dignissimos aliquam non
                praesentium dolore repellendus quae cumque, explicabo sapiente
                veniam. Debitis incidunt sapiente id velit.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam quibusdam magnam delectus vero pariatur iure amet
                molestias optio, in, numquam quia non repellat accusantium iusto
                magni nulla reprehenderit quae quo?
              </p>
            </div>
          </div>
          <div className="card__links">
            <ul>
              <li>
                <i className="fas fa-user-edit fa-lg"></i>
              </li>

              <li>
                <i className="fas fa-biking fa-lg"></i>
              </li>

              <li>
                <i className="fas fa-calendar-alt fa-lg"></i>
              </li>
            </ul>
          </div>
        </Card>
      </Cards>
    </div>
  );
};

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
