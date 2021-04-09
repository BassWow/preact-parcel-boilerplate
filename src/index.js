import { h, render } from "preact";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from "preact-router";
import { useState } from "preact/hooks";
import { Cards, Card } from "./components/Cards";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StopwatchFill } from "react-bootstrap-icons";



import "./styles/index.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container mt-5">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
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
                <StopwatchFill />
              </li>

              <li>
                <StopwatchFill />
              </li>

              <li>
                <StopwatchFill />
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
