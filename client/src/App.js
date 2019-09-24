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
        console.log(err);
      });
  }, []);
  return (
    user && (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{JSON.stringify(user)}</p>
        </header>
      </div>
    )
  );
}

export default App;
