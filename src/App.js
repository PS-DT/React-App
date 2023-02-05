
import "./App.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function App() {
  const team = [{ name: "Loc" }, { name: "Tung" }, { name: "Tay" }];
  return (
    <>
      <div className="container">
        {/* <div className="App" >
          <h1>Hello Team</h1>
          <ul>
            {team.map((member) => (
              <Name member={member} />
            ))}
          </ul>
        </div> */}
        <div>
          <StaffMember />
        </div>
      </div>

    </>
  );
}

function Name({ member }) {
  return <li>{member.name}</li>;
}



// function StaffMember() {
//   return (
//     <Card >
//       <Card.Img variant="left" className="image-staff" src="https://us.123rf.com/450wm/praewpailin/praewpailin2009/praewpailin200900539/praewpailin200900539.jpg?ver=6g"  />
//       <Card.Body>
//         <Card.Title>Member Name</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

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
