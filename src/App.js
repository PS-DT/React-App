
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
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
      <div className="d-flex banner justify-content-between flex-sm-nowrap flex-wrap">
        <div className="">
          <p><b>Min's Lash & Fibroblasts</b></p>
          <p>
            Open until 7:00 pm
            •<a href="tel: +1 346-204-2210" >  1 346-204-2210</a>
            •<a href="%202beautieslash@gmail.com" >  +2beautieslash@gmail.com</a>
          </p>
          <p> At Min's Lash & Fibroblasts, we don’t strict the beauty in the same way. We prefer to bring out the best version of you instead. </p>
        </div>
        <div className="banner-button">
          <div>
            <button className="book">Book</button>
            <br></br>
            <button className="bookings">My bookings</button></div>
        </div>
      </div>
    </>
  );
}




function NavControl() {
  const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }]
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
        <img alt="staffimage" className="image-staff" src="https://us.123rf.com/450wm/praewpailin/praewpailin2009/praewpailin200900539/praewpailin200900539.jpg?ver=6g"></img>
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

export default App;
