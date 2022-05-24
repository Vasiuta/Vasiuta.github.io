import React, {useEffect} from "react";
import {sendRequest, Credit, User, creditId} from "./xhr";


function Info() {
    document.title = 'Info Page';

    useEffect(() => {

        setTimeout(() => {
            sendRequest("GET", User)
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }, 2000);

        setTimeout(() => {
            sendRequest("GET", Credit)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
            }, 1000);

        setTimeout(() => {
            sendRequest("DELETE", Credit + '/' + creditId)
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
                      <h2 id="infoallacc">Information about all accounts.</h2>
                      <hr/>
                          <h3>Users</h3>
                          <table className="table table-dark table-striped">
                              <thead>
                              <tr>
                                  <th>User_Id</th>
                                  <th>UserName</th>
                                  <th>Password</th>
                                  <th>Email</th>
                                  <th>FirstName</th>
                                  <th>LastName</th>
                                  <th>status</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>John</td>
                                  <td>Doe</td>
                                  <td>john@example.com</td>
                                  <td>John</td>
                                  <td>Doe</td>
                                  <td>true</td>
                              </tr>
                              <tr>
                                  <td>1</td>
                                  <td>Mary</td>
                                  <td>Moe</td>
                                  <td>mary@example.com</td>
                                  <td>John</td>
                                  <td>Doe</td>
                                  <td>true</td>
                              </tr>
                              <tr>
                                  <td>1</td>
                                  <td>July</td>
                                  <td>Dooley</td>
                                  <td>july@example.com</td>
                                  <td>John</td>
                                  <td>Doe</td>
                                  <td>true</td>
                              </tr>
                              </tbody>
                          </table>
                          <hr/>
                              <h3>Credits</h3>
                              <table className="table table-dark table-striped">
                                  <thead>
                                  <tr>
                                      <th>Credit_Id</th>
                                      <th>LoanStatus</th>
                                      <th>Loan_Date</th>
                                      <th>Loan_Amount</th>
                                      <th>%Interest_Rate%</th>
                                      <th>BorrowerId</th>
                                      <th>Delete</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>true</td>
                                      <td>20.11.7201</td>
                                      <td>10000</td>
                                      <td>30</td>
                                      <td>1</td>
                                      <td>
                                          <button type="button" className="btn btn-danger">Delete</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>true</td>
                                      <td>20.11.7201</td>
                                      <td>10000</td>
                                      <td>30</td>
                                      <td>1</td>
                                      <td>
                                          <button type="button" className="btn btn-danger">Delete</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>true</td>
                                      <td>20.11.7201</td>
                                      <td>10000</td>
                                      <td>30</td>
                                      <td>1</td>
                                      <td>
                                          <button type="button" className="btn btn-danger">Delete</button>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
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

export default Info;
