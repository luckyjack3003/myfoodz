## react-redux-router4-saga-authorisation
![Alt text](../public/images/Screenshot from 2018-09-18 18-02-26.png?raw=true "Title")
## Features

* Powered by [react][] **16.4.2** & [redux][] **5.0.7** & [react-router-dom][] **5.0.7**
* Authentication
* A simple own redux
* Logout

## Notes

 * cannot visity /client until we are logged in. Clicking the "Login" button will simulate a login by setting Redux state.
 * visit any route will redirect /auth/login page if you are not logged.
 * on /client page, by clicking 'Request a photo'button will request an ajax request by using redux saga middleware.
 * /client/myRedux page is an simple example for showing how to make an own redux store inspired by learning redux sourccode and tutorials.
 * logout is to show how to clear sessionStorage and react-router do programtically navigation.

## How to run

 * git clone https://github.com/luckyjack3003/react-redux-router-saga-authorisation.git
 * npm install
 * npm start

