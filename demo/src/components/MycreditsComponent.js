import React, {useEffect} from "react";
import {sendRequest, Credit} from "./xhr";


function Mycredits() {
    document.title = 'MyCredits Page';

    useEffect(() => {

        setTimeout(() => {
            sendRequest("GET", Credit)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
            }, 1000);

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
                      <h2>Your credits info</h2>
                      <div className="panel panel-default credit">
                          <div className="panel-body">
                              <strong>Credit</strong>
                              <h5>Loan Status: loanstatus</h5>
                              <h5>Loan date: date</h5>
                              <h5>Loan Amount: amount</h5>
                              <h5>Interest Rate: rate</h5>
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

export default Mycredits;
