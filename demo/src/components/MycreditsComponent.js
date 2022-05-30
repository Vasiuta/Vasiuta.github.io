import React, {useEffect} from "react";
import {creditarray, alert1, getcredit} from "./xhr";
import ReactDOM from "react-dom/client";

function myCredit(){

    setTimeout(() => {
            const root = ReactDOM.createRoot(document.getElementById('loanstatus'));
            root.render(
                "Loan Status: " + creditarray[0].loan_status
            );
            const root1 = ReactDOM.createRoot(document.getElementById('loandate'));
            root1.render(
                "Loan date: " + creditarray[0].loan_date
            );
            const root2 = ReactDOM.createRoot(document.getElementById('loanamount'));
            root2.render(
                "Loan Amount: " + creditarray[0].loan_amount
            );
            const root3 = ReactDOM.createRoot(document.getElementById('interestrate'));
            root3.render(
                "Interest Rate: " + creditarray[0].interest_rate
            );
            const root4 = ReactDOM.createRoot(document.getElementById('eror'));
            root4.render(
                <React.StrictMode>
                    {alert1()}
                </React.StrictMode>
            );
        }, 600)

        return (
            <div className="panel panel-default credit">
                <div className="panel-body">
                    <strong>Credit</strong>
                    <h5 id="loanstatus">Loan Status: </h5>
                    <h5 id="loandate">Loan date: </h5>
                    <h5 id="loanamount">Loan Amount: </h5>
                    <h5 id="interestrate">Interest Rate: </h5>
                </div>
            </div>
        )
}

function Mycredits() {
    document.title = 'MyCredits Page';

    useEffect(() => {
            getcredit()
            /*const root5 = ReactDOM.createRoot(document.getElementById('allcredits'));
                root5.render(
                    <React.Fragment>
                        {myCredit()}
                    </React.Fragment>
                );*/
            setTimeout(() => {
                document.getElementById("allcredits").innerHTML = JSON.stringify(creditarray);
            }, 600)
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
                      <div id="allcredits"> </div>
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

export default Mycredits;
