import React, {useEffect, useState} from "react";
import {postcredit, credit, alert1} from "./xhr";
import ReactDOM from "react-dom/client";


function Takecredit() {
    document.title = 'TakeCredit Page';

    const [count, setCount] = useState(0);
    let ch;

    function ch1(){
        ch = "true"
    }
    function ch2(){
        ch = "false"
    }

    function func(){
            credit.loan_date = document.getElementById("date").value;
            credit.loan_amount = Number(document.getElementById("amount").value);
            credit.loan_status = ch;
            setCount(count + 1);
    }

        useEffect(() => {
            if (count > 0) {
                postcredit();
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
                      <h1>Here you can take a credit</h1>
                      <form className="form-horizontal" action="/action_page.php">
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="date">Loan date:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="date" placeholder="Enter loan date" name="date"/>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="amount">Loan amount:</label>
                              <div className="col-sm-10">
                                  <input className="form-control" id="amount" placeholder="Enter loan amount"
                                         name="amount"/>
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
                              <label className="control-label col-sm-2" htmlFor="lastname">Interesr rate:</label>
                              <div className="col-sm-10">
                                  <p className="form-control" id="lastname">30%</p>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="control-label col-sm-2" htmlFor="choose">Your loan status:</label>
                              <form id="choose">
                                  <label className="radio-inline">
                                      <input onClick={ch1} type="radio" name="optradio" checked/>True
                                  </label>
                                  <label className="radio-inline">
                                      <input onClick={ch2} type="radio" name="optradio"/>False
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

export default Takecredit;