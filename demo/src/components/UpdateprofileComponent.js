import React, {useEffect} from "react";
import profile2 from "./static/profile2.jpeg"
import {sendRequest, User, userupd} from "./xhr";


function Updateprofile() {
    document.title = 'UpdateProfile Page';

    useEffect(() => {
        setTimeout(() => {
            sendRequest("GET", User)
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }, 2000);

        setTimeout(() => {
            sendRequest("PUT", User, userupd)
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }, 2000);

    }, [])

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
                      <h2 id="canrepay">Here you can change information about your account.</h2>
                      <hr/>
                          <div id="blank1">
                              <div className="panel panel-default credit1">
                                  <div className="panel-body">
                                      <img src={profile2} alt="Profile picture" id="prff2" className="img-thumbnail"/>
                                          <div id="upddpr">
                                              <strong>Account info</strong>
                                              <h5>UserName: username</h5>
                                              <h5>Email: email@gmail.com</h5>
                                              <h5>FirstName: firstname</h5>
                                              <h5>LastName: lastname</h5>
                                          </div>
                                          <hr id="hrhr"/>
                                              <form className="form-horizontal" action="/action_page.php">
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5" htmlFor="firstname">First
                                                          Name:</label>
                                                      <div className="col-sm-7">
                                                          <input className="form-control" id="firstname"
                                                                 placeholder="Enter your First Name" name="firstname"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5" htmlFor="lastname">Last
                                                          Name:</label>
                                                      <div className="col-sm-7">
                                                          <input className="form-control" id="lastname"
                                                                 placeholder="Enter your Last Name" name="lastname"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5"
                                                             htmlFor="email">Email:</label>
                                                      <div className="col-sm-7">
                                                          <input type="email" className="form-control" id="email"
                                                                 placeholder="Enter email" name="email"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <div className="col-sm-offset-2 col-sm-7">
                                                          <button type="submit" className="btn btn-default" id="subbtn">
                                                              Submit
                                                          </button>
                                                      </div>
                                                  </div>
                                              </form>
                                  </div>
                              </div>
                          </div>
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

export default Updateprofile;