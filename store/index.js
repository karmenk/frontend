import cookie from 'cookie'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    return new Promise((resolve, reject) => {
      // if (req) {
      const cookies = cookie.parse(req.headers.cookie || '')
      if (Object.prototype.hasOwnProperty.call(cookies, 'x-access-token')) {
        setAuthToken(cookies['x-access-token'])
        dispatch('auth/fetch')
          .then((result) => {
            resolve(true)
          })
          .catch((error) => {
            console.log('Provided token is invalid:', error)
            resetAuthToken()
            resolve(false)
          })
      } else {
        resetAuthToken()
        resolve(false)
      }
      // } else {
      //   resolve(true)
      // }
    })
  }
}
