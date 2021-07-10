import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>Banana Bingo</h1>
          <Button>Look, I'm a button!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
