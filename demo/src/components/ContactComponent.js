import React from "react";


function Contact() {
    document.title = 'Contact Page';

  return (
      <React.Fragment>

          <div className="container-fluid text-center">
              <div className="row content">
                  <div className="col-sm-2 sidenav">
                      <a className="btn btn-default well l_b" href="/takecredit" role="button">Take a credit</a>
                      <a className="btn btn-default well l_b" href="/repaycredit" role="button">Repay the credit</a>
                      <a className="btn btn-default well l_b" href="/updateprofile" role="button">Update profile</a>
                  </div>
                  <div className="col-sm-8 text-center">
                      <h3>If you have some questions, please write me here:</h3>
                      <a href="mailto:vstoleksiy@gmail.com"><span id='gmail'>&#128100;</span></a>
                      <p><a href="mailto:vstoleksiy@gmail.com">vstoleksiy@gmail.com</a></p>
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

export default Contact;
