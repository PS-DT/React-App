
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Alert from 'react-bootstrap/Alert';
import useMediaQuery from 'react-media';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

function App() {

  return (
    <>
      <div className="container">
        <div>
          <Header />
        </div>
      </div>
      <div>
        <Alert variant="dark">
          <div className="container">
            This is a addres of store
          </div>
        </Alert>
      </div>
      <div className="container">
        <div>
          {Banner()}
        </div>
        <div >
          <NavControl />
        </div>

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55331.41859200201!2d-95.68279256874995!3d29.9157505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d1110692ac69%3A0xdca2dc8d3ccd507d!2sIHOP!5e0!3m2!1sen!2sus!4v1677376059805!5m2!1sen!2sus" width={400} height={300} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </>
  );
}


function Banner() {
  return (
    <>
      <Container fluid>
        <Row className="banner">
          <Col sm={12} md={8} lg={9}>

            <div>
              <p style={{ fontSize: "30px", fontWeight: "500" }}>Min's Lash & Fibroblasts</p>
              <p>
                Open until 7:00 pm
                •<a href="tel: +1 346-204-2210" >  1 346-204-2210</a>
                •<a href="%202beautieslash@gmail.com" >  +2beautieslash@gmail.com</a>
              </p>

              <p> At Min's Lash & Fibroblasts, we don’t strict the beauty in the same way. We prefer to bring out the best version of you instead. </p>
            </div>
          </Col>

          <Col sm={12} md={4} lg={3} className="banner-button">
            <BookPopUp/>
            <button className="bookings " >My bookings</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}




function NavControl() {
  // const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }]
  const [team, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/members").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(team)
  return (
    <Tabs
      defaultActiveKey="Staff"
      className="mb-3"
    >
      <Tab eventKey="Service" title="Service">
        <Service />
      </Tab>
      <Tab eventKey="Staff" title="Staff">
        {team.map((member, index) => (
          <StaffMember key={index} member={member} />
        ))}
      </Tab>
    </Tabs>
  );
}

function Header() {
  return (
    <div className="header">
      <div >
        <img className="logoMin" src="https://minpermanentbeauty.square.site/uploads/b/37786891d35eae97e0b4ced04b8dd6b701551979da9561e0b5e1de51b7f6ffee/New%20Logo%20Black%20Version%20(6)_1668575325.png?width=400"></img>
      </div>
    </div>
  )
}


function StaffMember({ member }) {
  return (
    <div className="d-flex justify-content-between align-self-center staff-card">
      <div className="d-flex align-items-start flex-column">
        <h1 className="mb-auto p-3">{member?.name}</h1>
        <p className="mb-auto p-3">
          <button className="lik_bookme">Book me</button>
        </p>
      </div>
      <div className="d-flex align-items-center">
        <img alt="staffimage" className="image-staff" src={member?.imgUrl}></img>
      </div>

    </div>

  );
}

function Service() {
  return (
    <div className="service-card">
      <div>
        <span style={{ fontWeight: 'bold' }}>Service Name </span>
      </div>
      <div className="price_time">
        <p> $45.00 * 55 mins </p>
      </div>
      <div>
        <p><a href="#" className="service_button">Book me</a></p>
      </div>
    </div>
  );
}

function BookPopUp(){
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
    <button onClick={() => setLgShow(true)} className="book" >Book</button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>bo gi vao day choi</Modal.Body>
      </Modal>
    </>
  )
}
export default App;
