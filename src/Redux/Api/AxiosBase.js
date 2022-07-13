import axios from 'axios';
const instance = axios.create({
baseURL: 'https://react-rails-api-demo.herokuapp.com/api/v1',
header:{
  "Content-Type":"application/json",
}
});
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('Token');
    config.headers.Authorization =  token ? ` ${token}` : '';
    return config;
  });
export default instance;
