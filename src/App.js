
import "./App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App">
        <UncontrolledExample/>
      </div>
    </>
  );
}

function UncontrolledExample() {
  const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }];
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <ul>
          {team.map((member) => (
            <Name member={member} />
          ))}
        </ul>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Hello</p>
      </Tab>
    </Tabs>
  );
}


function Name({ member }) {
  return <li>{member.name}</li>;
}

function Header() {
  return (
    <div className="header">
      <div></div>
      <div >
        <img className="logoGoogle" src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"></img>
      </div>
      <div>
        
        <input placeholder="search"></input>
        </div>
    </div>
  )
}

export default App;
