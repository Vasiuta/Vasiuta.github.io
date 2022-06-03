import React, {useEffect, useState} from "react";
import {logs, loguser, alert1} from "./xhr";
import ReactDOM from "react-dom/client";
function Login() {
    document.title = 'Login Page';

    const [count, setCount] = useState(0);

    function func(){
            loguser.username = document.getElementById("username").value;
            loguser.password = document.getElementById("pwd").value;
            setCount(count + 1);
    }


    useEffect(() => {
        if (count > 0) {
            logs();
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
                      <h2>Login form</h2>
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
                              <div className="col-sm-offset-2 col-sm-10">
                                  <div className="checkbox">
                                      <label><input type="checkbox" name="remember"/> Remember me</label>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="col-sm-offset-2 col-sm-10">
                                  <form action="">
                                  <button id="logbutton" type="button" onClick={func} className="btn btn-default">Submit</button>
                                  </form>
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

export default Login;
