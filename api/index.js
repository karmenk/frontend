import axios from 'axios'

export default {
  auth: {
    user: token => axios.get('/user', {
      headers: {
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
