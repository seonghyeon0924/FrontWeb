// import axios from 'axios'


// //body에 username과 password를 넣고  POST /authenticate
// class AuthenticationService {
//     // send username, password to the SERVER
//     executeJwtAuthenticationService(username, password) {
//         return axios.post('http://localhost:8090/authenticate', {
//             username,
//             password
//         })
//     }

//     executeHelloService() {
//         console.log("===executeHelloService===")
//         return axios.get('http://localhost:8090/hello');        
//     }


//     //로그인 성공하면 username을 authenticatedUser로 localStorage에 저장
//     //JWTToken을 생성해 setupAxisointerceptors에 넣기
//     registerSuccessfulLoginForJwt(username, token) {
//         console.log("===registerSuccessfulLoginForJwt===")
//         localStorage.setItem('token', token);
//         localStorage.setItem('authenticatedUser', username);
//         // sessionStorage.setItem('authenticatedUser', username)
//         //this.setupAxiosInterceptors(this.createJWTToken(token))
//         this.setupAxiosInterceptors();
//     }

//     //앞에 Bearer을 추가해서 Token을 생성
//     createJWTToken(token) {
//         return 'Bearer ' + token
//     }

//     setupAxiosInterceptors() {
//         axios.interceptors.request.use(
//             config => {
//                 const token = localStorage.getItem('token');
//                 if (token) {
//                     config.headers['Authorization'] = 'Bearer ' + token;
//                 }
//                 // config.headers['Content-Type'] = 'application/json';
//                 return config;
//             },
//             error => {
//                 Promise.reject(error)
//             });
//     }

//     logout() {
//         //sessionStorage.removeItem('authenticatedUser');
//         localStorage.removeItem("authenticatedUser");
//         localStorage.removeItem("token");
//     }

//     isUserLoggedIn() {
//         const token = localStorage.getItem('token');
//         console.log("===UserloggedInCheck===");
//         console.log(token);

//         if (token) {
//             return true;
//         }
        
//         return false;
//     }

//     getLoggedInUserName() {
//         //let user = sessionStorage.getItem('authenticatedUser')
//         let user = localStorage.getItem('authenticatedUser');
//         if(user===null) return '';
//         return user;
//     }
// }

// export default new AuthenticationService()