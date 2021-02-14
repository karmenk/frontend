import cookie from 'cookie'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    console.log('nuxtServerInit')
    // console.log(req)
    return new Promise((resolve, reject) => {
      if (req) {
        console.log('is req')
        const cookies = cookie.parse(req.headers.cookie || '')
        if (Object.prototype.hasOwnProperty.call(cookies, 'x-access-token')) {
          setAuthToken(cookies['x-access-token'])
          console.log('dispatching')
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
      } else {
        resolve(true)
      }
    })
  }
}
