import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Navigation/Home";
import Thatcher from "./Navigation/Thatcher";
import Brexit from "./Navigation/Brexit";

// eslint-disable-next-line
{
  /*
  Import the Components to be used building the class.
  Router is included in this class, allowing the application to have
  different pages, by setting up a <BrowserRouter> along with a <route>
  element that has a path value.

  With the Router this can be desribed as a "page" in the application.
  Below JSX defines and builds the component to be displayed
  on the screen when the class is called.
  */
}
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="hero is-primary">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h2 className="title is-2">
                  Top 10 Headlines from The Guardian Today
                </h2>
                <h2 className="subtitle">Edel Prior | CA1 | AJS | 02/2019</h2>
              </div>
            </div>
          </div>
          {/* - - - - - - - - - - - - - - - - - - - - */}
          <div className="columns">
            <div className="column is-2">
              <div className="menu sticky">
                <p className="menu-label">
                  <b>Quick Links</b>
                </p>
                {/* - - - - - - - - - - - - - - - - - - - - */}
                <ul className="menu-list">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  <NavLink to="/thatcher">Thatcher</NavLink>
                  <NavLink to="/brexit">Brexit</NavLink>
                </ul>
              </div>
            </div>
            {/* - - - - - - - - - - - - - - - - - - - - */}
            <div className="column is-9">
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/Thatcher" component={Thatcher} />
                <Route path="/Brexit" component={Brexit} />
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

// eslint-disable-next-line
{
  /* Default values for Props
  ------------------------------
  Helps to typecheck the programme. The library displays
  a warning in the JS console if an invalid value is provided
  for the prop. Only used for development purposes.
  Also provides a default set for each prop defined, so the user doesn't
  see null as a value.
  Not sure if applicable when <BrowserRouter> is defined.
  */
}
export default App;
