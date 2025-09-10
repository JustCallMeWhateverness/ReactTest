import { Row, Col } from 'react-bootstrap';

export default function App() {

  const headers = [
    'Header 1',
    'Header 2',
    'Header 3',
    'Header 4',
    'Header 5',
    'Header 6',
    'Header 7',
    'Header 8',
    'Header 9',
  ];

  return <>
    <header className="container-fluid bg-primary text-white p-3 mb-3">
      <Row>
        <Col>
          <h1>Bootstrap Test</h1>
        </Col>
      </Row>
      <main className="container mt-4">
        <Row>
          {headers.map(header => <article className="col-sm-6 col-md-4 col-lg-3">
            <h3>{header}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ducimus dolore atque neque animi labore ipsam, odio quae dignissimos, repudiandae deleniti ullam eos aliquam voluptates ad, culpa consequuntur possimus assumenda.</p>
          </article>)}
        </Row>
      </main>
      <footer className="container-fluid fixed-bottom bg-primary text-white p-3 mt-3">
        <Row>
          <Col>
            <p>Footer Text</p>
          </Col>
        </Row>
      </footer>
    </header>
  </>;
}