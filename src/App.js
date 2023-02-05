
import "./App.css";

function App() {
  const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }];
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App">
        <h1>Hello Team</h1>
        <ul>
          {team.map((member) => (
            <Name member={member} />
          ))}
        </ul>
      </div>
    </>
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
