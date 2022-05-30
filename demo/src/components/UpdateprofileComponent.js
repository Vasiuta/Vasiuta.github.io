import React, {useEffect, useState} from "react";
import profile2 from "./static/profile2.jpeg"
import {alert1, getuser, updateuser, user, userupd} from "./xhr";
import ReactDOM from "react-dom/client";


function Updateprofile() {
    document.title = 'UpdateProfile Page';

    const [count, setCount] = useState(0);

    function func(){
            userupd.firstName = document.getElementById("first").value;
            userupd.lastName = document.getElementById("last").value;
            userupd.clientName = document.getElementById("em").value;
            setCount(count + 1);
    }


    useEffect(() => {
        setTimeout(() => {
            getuser()
            }, 1200)
        setTimeout(() => {
            const root = ReactDOM.createRoot(document.getElementById('username'));
            root.render(
                "UserName: " + user.username
            );
            const root1 = ReactDOM.createRoot(document.getElementById('email'));
            root1.render(
                "Email: " + user.clientName
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
        }, 1800)
        if (count > 0) {
            updateuser()
            setTimeout(() => {
            const root = ReactDOM.createRoot(document.getElementById('eror'));
            root.render(
                <React.StrictMode>
                    {alert1()}
                </React.StrictMode>
            );
        }, 600);
        }
        }, [count])

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
                                              <h5 id="username">UserName: username</h5>
                                              <h5 id="email">Email: email@gmail.com</h5>
                                              <h5 id="firstname">FirstName: firstname</h5>
                                              <h5 id="lastname">LastName: lastname</h5>
                                          </div>
                                          <hr id="hrhr"/>
                                              <form className="form-horizontal" action="/action_page.php">
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5" htmlFor="firstname">First
                                                          Name:</label>
                                                      <div className="col-sm-7">
                                                          <input className="form-control" id="first"
                                                                 placeholder="Enter your First Name" name="firstname"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5" htmlFor="lastname">Last
                                                          Name:</label>
                                                      <div className="col-sm-7">
                                                          <input className="form-control" id="last"
                                                                 placeholder="Enter your Last Name" name="lastname"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5"
                                                             htmlFor="email">Email:</label>
                                                      <div className="col-sm-7">
                                                          <input type="email" className="form-control" id="em"
                                                                 placeholder="Enter email" name="email"/>
                                                      </div>
                                                  </div>
                                                  <div className="form-group">
                                                      <div className="col-sm-offset-2 col-sm-7">
                                                          <button type="button" className="btn btn-default" id="subbtn"
                                                          onClick={func}>
                                                              Submit
                                                          </button>
                                                      </div>
                                                  </div>
                                              </form>
                                  </div>
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

export default Updateprofile;