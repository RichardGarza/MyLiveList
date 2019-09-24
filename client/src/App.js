import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    Axios.get("/api")
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        setUser(err);
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{JSON.stringify(user)}</p>
      <p>Here are the users</p>
    </div>
  );
}

export default App;
