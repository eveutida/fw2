import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";

import {Container, Row, Col} from 'react-bootstrap';

function Index() {

  return <div> 
    <Menu/>
     Bem-vindo 
    <Container>
        <Row>
        <Col className="bg-primary ">1 of 2</Col>
        <Col className="bg-primary-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-danger">1 of 3</Col>
        <Col className="bg-danger-subtle">2 of 3</Col>
        <Col className="bg-warning-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer/>
  </div>
}



export default Index;


