let creditId, userId

const register = 'http://127.0.0.1:5000/register'
const logn = 'http://127.0.0.1:5000/login'
const postCredit = 'http://127.0.0.1:5000/credits'
const getCredit = 'http://127.0.0.1:5000/credits'
const postUserCredit = 'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId
const getUserCredit = 'http://127.0.0.1:5000/credits_by_user'
const deleteUserCredit = 'http://127.0.0.1:5000/credits_by_user/' + creditId + '/' + userId
const deleteCredit = 'http://127.0.0.1:5000/credits/' + creditId
const updateCredit = 'http://127.0.0.1:5000/credits/' + creditId
const getUser = 'http://127.0.0.1:5000/users'
const updateUser = 'http://127.0.0.1:5000/users'

function reg(method, url, body=null){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'application/json');

        xhr.withCredentials = true

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }else{
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))

    })
}

function logs(method, url, body){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.withCredentials = true;
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }else{
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))

    })
}

function sendRequest(method, url, body=null){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        let token = sessionStorage.getItem('')
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }else{
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))

    })
}


reg('POST', register, {
    username: 'OOOOO',
    password: 1234567890,
    clientName: 'vstoleksiy',
    firstName: 'Oleksiy',
    lastName: 'Vasiuta',
    status: 'manager'
}).then(data => console.log(data))
.catch(err => console.log(err))

// logs('POST', logn, {
//     username: 'OOOOO',
//     password: 1234567890,
// }).then(data => console.log(data))
// .catch(err => console.log(err))
//
// sendRequest('POST', postCredit, {
//     loan_status: 'true',
//     loan_date: '29.09',
//     loan_amount: 5500,
//     interest_rate: 25,
//     id_borrower: 0
// }).then(data => console.log(data))
// .catch(err => console.log(err))
//
// sendRequest('GET', getCredit)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
//
// sendRequest('POST', postUserCredit, {
//     user_id: 0,
//     credit_id: 0
// }).then(data => console.log(data))
// .catch(err => console.log(err))
//
// sendRequest('GET', getUserCredit)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// sendRequest('DELETE', deleteUserCredit)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// sendRequest('DELETE', deleteCredit)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// sendRequest('PUT', updateCredit, {
//     loan_status: 'false',
//     loan_date: '29.09',
//     loan_amount: 5500,
//     interest_rate: 25,
//     id_borrower: 0
// }).then(data => console.log(data))
// .catch(err => console.log(err))
//
// sendRequest('GET', getUser)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// sendRequest('PUT', updateUser, {
//     username: '',
//     password: '',
//     clientName: 'vstoleksiy',
//     firstName: 'Oleksiy',
//     lastName: 'Vasiuta',
//     status: 'manager'
// }).then(data => console.log(data))
// .catch(err => console.log(err))
