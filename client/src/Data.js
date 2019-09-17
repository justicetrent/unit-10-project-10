// export default class Data {
//     //api method used to make GET and POST requests to REST API
//     api(path, method, body = null) {
//         // configures request path using base URL in config.js file.
//         const url = config.apiBaseUrl + path

//         const options = {
//             method,
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8',
//             },
//         }
//         if (body !== null) {
//             options.body = JSON.stringify(body)
//         }

//         return fetch(url, options)
//     }
// }