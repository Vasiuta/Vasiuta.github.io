let token = null;

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("x-access-tokens", token);

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

const user = {
  username: "oleksiy",
  password: "1234567890",
  clientName: "vstoleksiy",
  firstName: "Oleksiy",
  lastName: "Vasiuta",
  status: "manager"
};

const userupd = {
  username: "",
  password: "",
  clientName: "vstoleksiy@gmail.com",
  firstName: "Oleksii",
  lastName: "Vasiuta",
  status: "manager"
}

const loguser = {
  username: "oleksiy",
  password: "1234567890"
};

const credit = {
  loan_status: "true",
  loan_date: "29.09",
  loan_amount: 5500,
  interest_rate: 25,
  id_borrower: 0
}

const creditupd = {
  loan_status: "true",
  loan_date: "01.34",
  loan_amount: 5500,
  interest_rate: 25,
  id_borrower: 0
}

const usercredit = {
  user_id: 0,
  credit_id: 0
}

sendRequest("POST", register, user)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

sendRequest("POST", logn, loguser)
    .then((data) => {
      token = data.token.slice(2, -1);
      console.log(data)})
    .catch((err) => console.log(err));

setTimeout(() => {
  sendRequest("POST", Credit, credit)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}, 1000);

setTimeout(() => {
  sendRequest("GET", Credit)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}, 1000);

setTimeout(() => {
  sendRequest("POST", UserCredit + '/' + creditId + '/' + userId, usercredit)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("GET", UserCredit)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("DELETE", UserCredit + '/' + creditId + '/' + userId)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("PUT", Credit + '/' + creditId, creditupd)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("DELETE", Credit + '/' + creditId)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("GET", User)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);

setTimeout(() => {
  sendRequest("PUT", User, userupd)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}, 2000);