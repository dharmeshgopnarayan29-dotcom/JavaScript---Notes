import React from "react";
// import ChildComponent from './Components/ChildComponent'
import Card from "./Components/Card";

function App() {
  const users = [
    { name: "Ashu", age: 20, picture: "https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg?w=2000" },
    { name: "Shivam", age: 20, picture: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" }
  ];

  return (
  //   <div>
  //   {
  //     users.map(user => (
  //       <ChildComponent user={user}  name={user.name} age={user.age} picture={user.picture}/>
  //     ))
  //   }
  // </div>

  <Card></Card>
  );
}

export default App;