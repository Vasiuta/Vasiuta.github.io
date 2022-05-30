import React from "react";

let alertnumber = 0;

function alert1() {
  if (alertnumber === 1) {
        return (
            <React.Fragment>

                <div className="alert alert-danger fade in">
                    <a href="#" className="close" data-dismiss="alert">&times;</a>
                    <strong>Error!</strong> A problem has been occurred while submitting your data.
                </div>

            </React.Fragment>
        );
    }else if (alertnumber === 2){
        return (
            <React.Fragment>

                <div className="alert alert-danger fade in">
                    <a href="#" className="close" data-dismiss="alert">&times;</a>
                    <strong>Error!</strong> You are not logged in. Firstly log in.
                </div>

            </React.Fragment>
        );
    }else if (alertnumber === 3) {
        return (
            <React.Fragment>

                <div className="alert alert-warning fade in">
                    <a href="#" className="close" data-dismiss="alert">&times;</a>
                    <strong>Error!</strong> Can`t find this user.
                </div>

            </React.Fragment>
        );
    }else if (alertnumber === 4) {
        return (
            <React.Fragment>

                <div className="alert alert-warning fade in">
                    <a href="#" className="close" data-dismiss="alert">&times;</a>
                    <strong>Error!</strong> You can`t do it. You are not manager.
                </div>

            </React.Fragment>
        );
    }else if (alertnumber === 5) {
        return (
            <React.Fragment>

                <div className="alert alert-success fade in">
                    <a href="#" className="close" data-dismiss="alert">&times;</a>
                    <strong>Success!</strong> The process was successful.
                </div>

            </React.Fragment>
        );
    }
}

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
      }
    }
      xhr.open(method, url);

      xhr.responseType = "json";

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("x-access-tokens", localStorage.getItem('token'));

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject(xhr.response);
      };

      xhr.send(JSON.stringify(body));

  });
}

let userId = 133;
let creditId = 126;

const register = 'http://127.0.0.1:5000/register';
const logn = 'http://127.0.0.1:5000/login';
const Credit = 'http://127.0.0.1:5000/credits';
const UserCredit = 'http://127.0.0.1:5000/credits_by_user';
const User = 'http://127.0.0.1:5000/users';

let user = {
  /*oleksiy
  1234567890
  vstoleksiy
  Oleksiy
  Vasiuta
  manager*/
  username: "",
  password: "",
  clientName: "",
  firstName: "",
  lastName: "",
  status: ""
};

let userupd = {
  /*vstoleksiy@gmail.com
  Oleksii
  Vasiuta
  manager*/
  username: "",
  password: "",
  clientName: "",
  firstName: "",
  lastName: "",
  status: ""
}

let credit = {
  /*true
  29.09
  5500
  25*/
  loan_status: "",
  loan_date: "",
  loan_amount: 0,
  interest_rate: 30,
  id_borrower: 0
}

let creditarray;

let creditupd = {
  /*true
  01.34
  5500
  25*/
  loan_status: "",
  loan_date: "",
  loan_amount: 0,
  interest_rate: 0,
  id_borrower: 0
}

let usercredit = {
  user_id: 0,
  credit_id: 0
}

let loguser = {
        // oleksiy
        // 1234567890
        username: "",
        password: ""
}

function regs (){
  sendRequest("POST", register, user)
      .then((data) => {
          console.log(data)
          alertnumber = 5;
      })
      .catch((err) => {
          console.log(err)
          alertnumber = 1;
      });
}

function logs(){
  sendRequest("POST", logn, loguser)
      .then((data) => {
          localStorage.setItem('token', data.token.slice(2, -1));
          console.log(data);
          alertnumber = 5;
      })
      .catch((err) => {
          console.log(err);
          alertnumber = 1;
      });
}

function postcredit(){
    sendRequest("POST", Credit, credit)
        .then((data) => {
          console.log(data);
          if (data.loan_amount === undefined)
              alertnumber = 2;
          else
              alertnumber = 5;
        })
        .catch((err) => {
            console.log(err)
            alertnumber = 1;
        });
}

function getcredit(){
    sendRequest("GET", Credit)
        .then((data) => {
          creditarray = data;
          console.log(data);
          if (data[0].loan_date === undefined)
              alertnumber = 2;
          else
              alertnumber = 5;
        })
        .catch((err) => {
            console.log(err);
            alertnumber = 1
        })
}

function postusercredit(){
  setTimeout(() => {
    sendRequest("POST", UserCredit + '/' + creditId + '/' + userId, usercredit)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, 2000);
}

function getusercredit(){
  setTimeout(() => {
    sendRequest("GET", UserCredit)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, 2000);
}

function deleteusercredit(){
  setTimeout(() => {
    sendRequest("DELETE", UserCredit + '/' + creditId + '/' + userId)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, 2000);
}

function updatecredit(){
  setTimeout(() => {
    sendRequest("PUT", Credit + '/' + creditId, creditupd)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, 2000);
}

function deletecredit(){
  setTimeout(() => {
    sendRequest("DELETE", Credit + '/' + creditId)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }, 2000);
}

function getuser(){
  setTimeout(() => {
    sendRequest("GET", User)
        .then((data) => {
            console.log(data)
            user.username = data.username;
            user.password = data.password;
            user.lastName = data.lastName;
            user.firstName = data.firstName;
            user.clientName = data.clientName;
            user.status = data.status;
            userupd.status = data.status;
            if (data.username === undefined)
                alertnumber = 2;
            else
                alertnumber = 5;
        }).catch((err) => {
            console.log(err);
            alertnumber = 1
        })
  }, 500);
}

function updateuser(){
  setTimeout(() => {
    sendRequest("PUT", User, userupd)
        .then((data) => {
            console.log(data);
            if (data.username === undefined)
                alertnumber = 2;
            else
                alertnumber = 5;
        })
        .catch((err) => {
            console.log(err);
            alertnumber = 1
        })
  }, 1000);
}

export {creditId, userId, userupd, credit, usercredit, user,
  creditupd, loguser, logs, alertnumber, getcredit, deletecredit, deleteusercredit,
  getuser, getusercredit, postcredit, postusercredit, regs, updatecredit, updateuser,
 sendRequest, User, UserCredit, Credit, register, logn, alert1, creditarray};