import React, {useEffect} from "react";
import profile2 from "./static/profile2.jpeg"
import {alert1, getuser, user} from "./xhr";
import ReactDOM from "react-dom/client";


function Myprofile() {
    document.title = 'MyProfile Page';

    function logout(){
        localStorage.setItem('token', null);
    }

    useEffect(() => {
        getuser()
        setTimeout(() => {
            const root = ReactDOM.createRoot(document.getElementById('username'));
            root.render(
                "USERNAME: " + user.username
            );
            const root1 = ReactDOM.createRoot(document.getElementById('email'));
            root1.render(
                "EMAIL: " + user.clientName
            );
            const root2 = ReactDOM.createRoot(document.getElementById('firstname'));
            root2.render(
                "FirstName: " + user.firstName
            );
            const root3 = ReactDOM.createRoot(document.getElementById('lastname'));
            root3.render(
                "LastName: " + user.lastName
            );
            const root4 = ReactDOM.createRoot(document.getElementById('eror'));
            root4.render(
                <React.StrictMode>
                    {alert1()}
                </React.StrictMode>
            );
        }, 1000)
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
                                      <h5 id="username">USERNAME: </h5>
                                      <h5 id="email">EMAIL: </h5>
                                      <h5 id="firstname">FirstName: </h5>
                                      <h5 id="lastname">LastName: </h5>
                                  </div>
                          </div>
                          <hr id="hrhr"/>
                              <div className="container-fluid text-center">
                                  <a className="col-sm-3 btn btn-warning btnlogout" href="/updateprofile" role="button">Update
                                      Profile</a>
                                  <div className="col-sm-6"> </div>
                                  <a onClick={logout} className="col-sm-3 btn btn-default btnlogout" role="button">Logout</a>
                              </div>
                      </div>
                      <div id="eror"> </div>
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
