
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }];
  return (
    <>
      <div className="App">
        <h1>Hello Team</h1>
        <ul>
          {team.map((member) => (
            <Name member={member} />
          ))}

          {Banner()}
        </ul>
      </div>
    </>
  );
}

function Name({ member }) {
  return <li>{member.name}</li>;
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

export default App;