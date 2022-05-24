import React, {useEffect, useState} from "react";
import {alert1, regs, user} from "./xhr";
import ReactDOM from "react-dom/client";

function Createacc() {
    document.title = 'CreateAcc Page';

    const [count, setCount] = useState(0);
    let ch;
    function ch1() {
        ch = "user"
    }
    function ch2() {
        ch = "manager"
    }

    function func(){
            user.username = document.getElementById("username").value;
            user.password = document.getElementById("pwd").value;
            user.clientName = document.getElementById("email").value;
            user.firstName = document.getElementById("firstname").value;
            user.lastName = document.getElementById("lastname").value;
            user.status = ch;
            setCount(count + 1);
    }

        useEffect(() => {
            if (count > 0) {
                regs();
                setTimeout(() => {
                    const root = ReactDOM.createRoot(document.getElementById('eror'));
                    root.render(
                        <React.StrictMode>
                            {alert1()}
                        </React.StrictMode>
                    );
                    }, 1000);
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
                      <h2>Create your own account!</h2>
                      <form className="form-horizontal" action="/action_page.php">
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="username" placeholder="Enter username"
                                         name="username"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                              <div className="col-sm-10">
                                  <input type="password" className="form-control" id="pwd" placeholder="Enter password"
                                         name="pwd"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="pwd2">Again Password:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="pwd2" placeholder="Enter password again"
                                         name="pwd2"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                              <div className="col-sm-10">
                                  <input type="email" className="form-control" id="email" placeholder="Enter email"
                                         name="email"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="firstname">FirstName:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="firstname" placeholder="Enter FirstName"
                                         name="firstname"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="lastname">Lastname:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="lastname" placeholder="Enter Lastname"
                                         name="lastname"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="choose">Choose between:</label>
                              <form id="choose">
                                  <label className="radio-inline">
                                      <input type="radio" name="optradio" onClick={ch1} checked/>Client
                                  </label>
                                  <label className="radio-inline">
                                      <input type="radio" name="optradio" onClick={ch2}/>Manager
                                  </label>
                              </form>
                          </div>
                          <div className="form-group">
                              <div className="col-sm-offset-2 col-sm-10">
                                  <button type="button" onClick={func} className="btn btn-default">Submit</button>
                              </div>
                          </div>
                      </form>
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

export default Createacc;
