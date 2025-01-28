import axios from 'axios'
import envApp from '../config/app'

const { BACKEND_URI } = envApp

const API = axios.create({
  baseURL: `${BACKEND_URI}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

API.defaults.withCredentials = false

export default API
