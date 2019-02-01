import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Navigation/Home";
import Thatcher from "./Navigation/Thatcher";
import Brexit from "./Navigation/Brexit";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title is-2">
                Top 10 Headlines from The Guardian Today
              </h2>
              <h2 className="subtitle">Edel Prior | CA1 | AJS | 02/2019</h2>
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <div className="menu sticky">
                <p className="menu-label">
                  <b>Quick Links</b>
                </p>

                <ul className="menu-list">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  <NavLink to="/thatcher">Thatcher</NavLink>
                  <NavLink to="/brexit">Brexit</NavLink>
                </ul>
              </div>
            </div>
            <div className="column is-9">
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/Thatcher" component={Thatcher} />
                <Route path="/Brexit" component={Brexit} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
