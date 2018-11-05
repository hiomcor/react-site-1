import React, { Component } from "react";
import "./App.css";
import Butter from 'buttercms';

import { Router, IndexRoute, Route } from 'react-router';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
);


const butter = Butter('3695cf53e5a0371a8802a916dba377a96e4481e4');

let fakeServerData = {
  user: {
    name: 'Corey'
  }
}

class NavbarBootstrap extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/action">Action</a>
                <a className="dropdown-item" href="/another-action">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/something-else">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/disabled">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  };
}

class Banner extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }
  componentDidMount() {
    this.setState({ serverData: fakeServerData })
  }
  render() {
    return (
      <div className="body-pad">
        <div className="banner-home d-flex justify-content-center align-items-center">
          <h1>{this.state.serverData.user && this.state.serverData.user.name}'s Test Site</h1>
        </div>
      </div>
    );
  }
}

class Staggered extends Component {
  render() {
    return (
      <div className="body-pad">
        <div className="container">
          <div className="row grey-bg">
            <div className="col-lg-6 col-xs-12">
              <h2 className="stagger">Projects we love.</h2>
              <div className="project-box border-yellow"></div>
              <div className="project-box border-blue"></div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="project-box border-lime"></div>
              <div className="project-box border-purple"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container pt-5">
          <img className="svg-rotate" src={("/images/JB-circle.svg")} alt="JB Logo" width="25" />
          <h2>Lets work<br />together</h2>
          <img src={("/images/right-arrow-large.svg")} alt="arrow" height="16" />
          <div className="shapeshifter" id='btn'></div>
        </div>
      </footer>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  componentWillMount() {
    butter.page.retrieve('*', 'homepage').then((resp) => {
      this.setState({
        content: resp.data.data
      })
    });
  }

  render() {
    if (this.state.content) {
      const homepage = this.state.content;
      return (
        <div className="App">
          <NavbarBootstrap />
          <Banner />
          <h1>{homepage.headline}</h1>
          <img width="100%" src="{homepage.hero_image}" />
          <button>{homepage.call_to_action}</button>
          <h3>Customers Love Us!</h3>
          {homepage.customer_logos}
          <Staggered />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default App;
