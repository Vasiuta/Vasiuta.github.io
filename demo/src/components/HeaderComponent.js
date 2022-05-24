import React from "react";

function Header() {

  return (
      <React.Fragment>
          <header>
              <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse"
                                  data-target="#myNavbar" >
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" id="logo" href="/myprofile">Logo</a>
                      </div>
                      <div className="collapse navbar-collapse" id="myNavbar">
                          <ul className="nav navbar-nav">
                              <li><a href="/">Home</a></li>
                              <li><a href="/about">About</a></li>
                              <li><a href="/mycredits">MyCredits</a></li>
                              <li><a href="/contact">Contact</a></li>
                          </ul>
                          <ul className="nav navbar-nav navbar-right">
                              <li><a id="cb" href="/info">CB</a></li>
                          </ul>
                          <ul className="nav navbar-nav navbar-right">
                              <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                          </ul>
                          <ul className="nav navbar-nav navbar-right">
                              <li><a href="/createacc"><span></span> Create Account</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </header>

      </React.Fragment>
  );
}

export default Header;
