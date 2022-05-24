import React, {useEffect} from "react";
import profile2 from "./static/profile2.jpeg"
import {sendRequest, User} from "./xhr";


function Myprofile() {
    document.title = 'MyProfile Page';

    useEffect(() => {
        setTimeout(() => {
            sendRequest("GET", User)
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
                      <h2>Information about your account</h2>
                      <div className="panel panel-default" id="profile">
                          <div className="panel-body">
                              <img src={profile2} alt="Profile picture" id="prof2" className="col-sm-2 sidenav"/>
                                  <div className="col-sm-8 sidenav">
                                      <h5>USERNAME: username</h5>
                                      <h5>EMAIL: email.gmail.com</h5>
                                      <h5>FirstName: firstname</h5>
                                      <h5>LastName: lastname</h5>
                                  </div>
                          </div>
                          <hr id="hrhr"/>
                              <div className="container-fluid text-center">
                                  <a className="col-sm-3 btn btn-warning btnlogout" href="/updateprofile" role="button">Update
                                      Profile</a>
                                  <div className="col-sm-6"></div>
                                  <a className="col-sm-3 btn btn-default btnlogout" role="button">Logout</a>
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

export default Myprofile;
