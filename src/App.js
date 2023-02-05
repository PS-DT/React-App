
import "./App.css";

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
        </ul>
      </div>
    </>
  );
}

function Name({ member }) {
  return <li>{member.name}</li>;
}

export default App;
