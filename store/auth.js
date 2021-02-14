import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import api from '~/api'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

export const state = () => ({
  userId: null,
  username: null,
  clientId: null,
  user: null
})

export const mutations = {
  set_user (store, data) {
    store.userId = data.userId
    store.username = data.username
    store.clientId = data.clientId
  },
  reset_user (store) {
    store.userId = null
    store.username = null
    store.clientId = null
  }
}

export const actions = {
  fetch ({ commit }) {
    return api.auth.user(getToken())
      .then((response) => {
        console.log('set_user:', response.data)
        commit('set_user', response.data)
        return response
      })
      .catch((error) => {
        commit('reset_user')
        return error
      })
  },
  login ({ commit }, data) {
    return api.auth.login(data, getToken())
      .then((response) => {
        console.log(response.data)
        commit('set_user', response.data.user)
        setAuthToken(response.data.token)
        cookies.set('x-access-token', response.data.token, { expires: 7 })
        return response
      })
  },
  reset ({ commit }) {
    commit('reset_user')
    resetAuthToken()
    cookies.remove('x-access-token')
    return Promise.resolve()
  }
}

const getToken = () => {
  console.log(process.env.accessTokenSecret)
  return jwt.sign({
    service: 'frontend'
  }, process.env.accessTokenSecret, { expiresIn: '1h' })
}
