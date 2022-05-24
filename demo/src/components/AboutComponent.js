import React from "react";


function About() {
    document.title = 'About Page';

  return (
      <React.Fragment>

          <div className="container-fluid text-center">
              <div className="row content">
                  <div className="col-sm-2 sidenav">
                      <a className="btn btn-default well l_b" href="/takecredit" role="button">Take a credit</a>
                      <a className="btn btn-default well l_b" href="/repaycredit" role="button">Repay the credit</a>
                      <a className="btn btn-default well l_b" href="/updateprofile" role="button">Update profile</a>
                  </div>
                  <div className="col-sm-8 text-left">
                      <h1>About creation this website</h1>
                      <p>I have a task to do a full-stack project.<br/> Firstly, I made a back-end project.<br/> Here you
                          can see back-end
                          tasks: <a href="https://github.com/shymanskyivm/Labs_For_Application_Programming">Back-End
                              tasks</a> <br/>And
                              that is my work: <a href="https://github.com/Vasiuta/PP_laba">Back-End project</a>
                              <br/> Secondly, I`m making a
                                  front-end project. <br/> Here you can see front-end tasks:
                                      <a data-toggle="collapse" data-target="#labs">Front-End tasks</a> <br/></p>
                      <div id="labs" className="collapse">
                          <h2>Labs</h2>
                          <h4>Lab 0. Preparation of REST back-end from previous course. </h4>
                          <strong>Max 0 poins</strong>
                          <h4>Lab 1. Static pages layout. Adaptive/Responsible Design. SASS. GitHub Pages.</h4>
                          <strong>Max 10 points</strong>
                          <h4>Lab 2. Client-server interaction with pure JS, no jQuery. AJAX. Linter.</h4>
                          <strong>Max 10 points</strong>
                          <h4>Lab 3. Basic single page application with user management. Framework.</h4>
                          <strong>Max 10 points</strong>
                          <h4>Lab 4. Add project specific functionality to SPA.</h4>
                          <strong>Max 25 points</strong>
                          <h4>Lab 5. Unit tests.</h4>
                          <strong>Max 5 points</strong>
                          <h3>Max 60 points for all 5 labs.</h3>
                          <h4>Lab 6. Websocket (optional)</h4>
                          <strong>Max 10 points</strong>
                      </div>
                      <p>And that is my work: <a href="https://github.com/Vasiuta/Vasiuta.github.io">Front-End
                          project</a></p>
                      <hr/>

                  </div>
                  <div className="col-sm-2 sidenav">
                      <div className="well">
                          <p>ADS</p>
                      </div>
                      <div className="well">
                          <p>ADS</p>
                      </div>
                  </div>
              </div>
          </div>

      </React.Fragment>
  );
}

export default About;
