
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>
      <div className="container">
        <div>
          {Banner()}
        </div>
        <div>
          <StaffMember />
        </div>
      </div>

    </>
  );
}

function Banner() {
  return (
    <>

      {/* <div className="App">
      </div> */}

      {/* <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >

      </ThemeProvider> */}

      <Container>
        {/* <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>

      </Row> */}
        <Row>
          <Col>
            <p><b>Min's Lash & Fibroblasts</b></p>
            <p>
              Open until 7:00 pm
              •<a href="tel: +1 346-204-2210" >  1 346-204-2210</a>
              •<a href="%202beautieslash@gmail.com" >  +  2beautieslash@gmail.com</a>

            </p>
            <p> At Min's Lash & Fibroblasts, we don’t strict the beauty in the same way. We prefer to bring out the best version of you instead. </p>
          </Col>
          <Col xs={4}>2 of 3 (wider)</Col>
        </Row>
      </Container>
    </>
  );
}


function StaffMember() {
  return (
    <div className="staff-card">
      <div>
        <h1>Member Name</h1>
        <p><a href="#" className="lik_bookme">Book me</a></p>
      </div>
      <div>
        <img alt="staffimage" className="image-staff" src="https://us.123rf.com/450wm/praewpailin/praewpailin2009/praewpailin200900539/praewpailin200900539.jpg?ver=6g"></img>
      </div>
    </div>
  );
}
export default App;