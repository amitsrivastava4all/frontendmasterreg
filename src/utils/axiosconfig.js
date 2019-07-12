import axios from 'axios';
export const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/',
    timeout: 4000,
//     headers: {'reqcomingfrom': 'web','lang':'en','accept':'json','apikey':'ABCD123'}
//   
}
);

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("Request Interceptor Call"+localStorage.tokenId );
    config.headers['token']=localStorage.tokenId;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });