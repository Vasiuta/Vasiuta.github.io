import React from "react";
import {sendRequest} from "./components/xhr";

/*let container = null;
let asd = require("./components/LoginComponent")

beforeEach(() => {
  let div = document.createElement("div")
  document.body.appendChild(div);
  container = mount(<Login/>, {attachTo: div})
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

  it("renders login data", () => {
    const fakeLogin = {
      username: "oleksiy",
      password: "1234567890",
    };

    // let spy = jest.spyOn(Login, 'func')
    asd.func = jest.fn()

    act(() => {
      container.update()
      container.find("logbutton").simulate('click');
    });

    /!*expect(container.querySelector("summary").textContent).toBe(fakeUser.username);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.password);*!/
    // expect(container.textContent).toContain(fakeLogin.username);
    expect(asd.func).toHaveBeenCalled()

    // spy.mockClear()
  });*/

test('register new user', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 201
    }

    let user = {
        username: "oleksiy",
        password: "1234567890",
        clientName: "vstoleksiy",
        firstName: "Oleksiy",
        lastName: "Vasiuta",
        status: "manager"
  }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("POST", 'http://127.0.0.1:5000/register', user)
      .then((response) => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('POST', 'http://127.0.0.1:5000/register')
          expect(xhrMock.withCredentials).toBe(true)

          // expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

          let formData = new FormData()
          formData.append('firstParam', 'firstParamValue')

      })

})

test('login', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let loguser = {
        username: "oleksiy",
        password: "1234567890"
  }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("POST", 'http://127.0.0.1:5000/login', loguser)
      .then((response) => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('POST', 'http://127.0.0.1:5000/login')
          expect(xhrMock.withCredentials).toBe(true)

      })

})

test('post new credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let credit = {
  loan_status: "true",
  loan_date: "29.09",
  loan_amount: 5500,
  interest_rate: 30,
  id_borrower: 0
}

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("POST", 'http://127.0.0.1:5000/credits', credit)
      .then((response) => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('POST', 'http://127.0.0.1:5000/credits')
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('get credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("GET", 'http://127.0.0.1:5000/credits')
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('GET', 'http://127.0.0.1:5000/credits')
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('post user with credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let usercredit = {
      user_id: 0,
        credit_id: 0
  }

  let userId = 133;
  let creditId = 126;

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("POST", 'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId, usercredit)
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('POST', 'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId)
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('get user for a credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("GET", 'http://127.0.0.1:5000/credits_by_user')
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('GET', 'http://127.0.0.1:5000/credits_by_user')
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('delete usercerdit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let userId = 133;
  let creditId = 126;

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("DELETE", 'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId)
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('DELETE',
              'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId)
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('update the credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let creditupd = {
      loan_status: "true",
        loan_date: "01.34",
        loan_amount: 5500,
        interest_rate: 25,
        id_borrower: 0
  }

  let creditId = 126;

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("PUT", 'http://127.0.0.1:5000/credits/' + creditId, creditupd)
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('PUT', 'http://127.0.0.1:5000/credits/' + creditId)
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('delete the credit', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let creditId = 126;

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("DELETE", 'http://127.0.0.1:5000/credits/' + creditId)
      .then(() => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('DELETE', 'http://127.0.0.1:5000/credits/' + creditId)
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('get user', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("GET", 'http://127.0.0.1:5000/users')
      .then((response) => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('GET', 'http://127.0.0.1:5000/users')
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))

      })

})

test('update the user', () => {
  let xhrMock = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      onreadystatechange: jest.fn(),
      send: jest.fn(),
      readyState: 4,
      status: 200
    }

    let userupd = {
      username: "",
        password: "",
        clientName: "vstoleksiy@gmail.com",
        firstName: "Oleksii",
        lastName: "Vasiuta",
        status: "manager"
  }

  window.XMLHttpRequest = jest.fn(() => xhrMock)

    sendRequest("PUT", 'http://127.0.0.1:5000/users', userupd)
      .then((response) => {
          expect(xhrMock.setRequestHeader).toBeCalledWith('Content-Type', 'application/json')
          expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json')
          expect(xhrMock.open).toBeCalledWith('PUT', 'http://127.0.0.1:5000/users')
          expect(xhrMock.withCredentials).toBe(true)

          expect(xhrMock.setRequestHeader).toBeCalledWith('x-access-tokens', localStorage.getItem('token'))
      })
})
