import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Password } from "./containers/Password";
import { NewProject } from "./containers/NewProject";
import { DeleteLink } from "./containers/DeleteLink";
import { InviteMembers } from "./containers/InviteMembers";
import { Collaborator } from "./containers/Collaborator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InviteMembers />
        <NewProject />
        <DeleteLink />
        <Collaborator />
        <Password />
      </div>
    );
  }
}

export default App;
