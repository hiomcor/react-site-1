import React, { Component } from "react";
import "./App.css";

let fakeServerData = {
  user: {
    name: 'Corey'
  }
}

class NavbarBootstrap extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/home">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/action">Action</a>
                <a class="dropdown-item" href="/another-action">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/something-else">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="/disabled">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
          <img src="images/JB-circle.svg" alt="JB Logo" />
          <h2>Lets work<br />together</h2>
          <img src="images/right-arrow-large.svg" alt="arrow" />
        </div>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBootstrap />
        <Banner />
        {/* <Carousel /> */}
        <Staggered />
        <Footer />
      </div>
    );
  }
}

export default App;
