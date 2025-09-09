import { Row, Col } from 'react-bootstrap';

export default function App() {
  return <>
    <header className="container-fluid bg-primary text-white p-3 mb-3">
      <Row>
        <Col>
          <h1>Bootstrap Test</h1>
        </Col>
      </Row>
      <main className="container "> </main>
      <footer className="container-fluid bg-primary text-white p-3 mt-3">
        <Row>
          <Col>
            <p>Footer Text</p>
          </Col>
        </Row>
      </footer>
    </header>
  </>;
}