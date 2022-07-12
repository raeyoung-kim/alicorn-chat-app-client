import axios from 'axios';

const serverAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  withCredentials: true,
});

export default serverAPI;
