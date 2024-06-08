import axios from "axios";

const BASEURL = "https://musicapi.huabofeng.eu.org";

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    throw new Error("响应拦截器：" + err);
  }
);

export default axiosInstance;
