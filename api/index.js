import axios from 'axios'

export default {
  auth: {
    user: (token, accessToken) => axios.get('/user', {
      headers: {
        'x-access-token': accessToken,
        authorization: 'JWT ' + token
      }
    }),
    login: (data, token) => axios.post('/login', data, {
      headers: {
        authorization: 'JWT ' + token
      }
    })
  }
}
