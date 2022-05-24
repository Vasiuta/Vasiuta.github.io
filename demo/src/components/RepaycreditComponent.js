import React, {useEffect} from "react";
import bb from "./static/bb.jpeg"
import {sendRequest, Credit, creditId, creditupd} from "./xhr";


function Repaycredit() {
    document.title = 'RepayCredit Page';

    useEffect(() => {
        setTimeout(() => {
            sendRequest("GET", Credit)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
            }, 1000);

        setTimeout(() => {
            sendRequest("PUT", Credit + '/' + creditId, creditupd)
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
                      <h2 id="canrepay">Here you can repay or partially repay your credit.</h2>
                      <hr/>
                          <div id="blank1">
                              <div className="panel panel-default credit1">
                                  <div className="panel-body">
                                      <img src={bb} alt="Profile picture" id="bbimg" className="img-circle"/>
                                          <div id="crrepay">
                                              <strong>Credit</strong>
                                              <h5>Loan Status: loanstatus</h5>
                                              <h5>Loan date: date</h5>
                                              <h5>Loan Amount: amount</h5>
                                              <h5>Interest Rate: rate</h5>
                                          </div>
                                          <hr id="hrhr1"/>
                                              <form className="form-horizontal" action="/action_page.php">
                                                  <div className="form-group">
                                                      <label className="control-label col-sm-5" htmlFor="amount">Loan
                                                          repayment amount:</label>
                                                      <div className="col-sm-7">
                                                          <input className="form-control" id="amount"
                                                                 placeholder="Enter loan repayment amount"
                                                                 name="amount"/>
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
                                                          <button type="submit" className="btn btn-default"
                                                                  id="subbtn">Submit
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

export default Repaycredit;
