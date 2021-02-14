import axios from 'axios'
import jwt from 'jsonwebtoken'

export function setAuthToken (token) {
  axios.defaults.headers.common['x-access-token'] = token
}

export function resetAuthToken () {
  delete axios.defaults.headers.common['x-access-token']
}

export function getToken () {
  return jwt.sign({
    service: 'frontend'
  }, process.env.accessTokenSecret, { expiresIn: '1h' })
}
