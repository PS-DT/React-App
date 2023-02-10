
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {

  return (
    <>
      <div className="container">
        <div>
          <Header />
        </div>
        <div>
          {Banner()}
        </div>
        <div >
          <NavControl />
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

      <div className="d-flex banner">

        <div className="p-5 flex-fill align-self-center">
          <p><b>Min's Lash & Fibroblasts</b></p>
          <p>
            Open until 7:00 pm
            •<a href="tel: +1 346-204-2210" >  1 346-204-2210</a>
            •<a href="%202beautieslash@gmail.com" >  +2beautieslash@gmail.com</a>

          </p>
          <p> At Min's Lash & Fibroblasts, we don’t strict the beauty in the same way. We prefer to bring out the best version of you instead. </p>
        </div>
        <div className="p-1 flex-fill align-self-center">
          <button className="book">Book</button>
          <br></br>
          <button className="bookings">My bookings</button>
        </div>
      </div>

    </>
  );
}

function NavControl() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Service" title="Service">
        <Service />
      </Tab>
      <Tab eventKey="Staff" title="Staff">
        <StaffMember />
      </Tab>
    </Tabs>
  );
}

function Header() {
  return (
    <div className="header">
      <div></div>
      <div >
        <img className="logoMin" src="https://minpermanentbeauty.square.site/uploads/b/37786891d35eae97e0b4ced04b8dd6b701551979da9561e0b5e1de51b7f6ffee/New%20Logo%20Black%20Version%20(6)_1668575325.png?width=400"></img>
      </div>
      <div>

        <input placeholder="search"></input>
      </div>
    </div>
  )
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

function Service() {
  return <h1>Tung working here</h1>
}
export default App;