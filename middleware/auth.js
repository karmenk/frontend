export default function ({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.auth.username
  const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
  if (!userIsLoggedIn && !urlRequiresNonAuth) {
    return redirect('/login')
  }

  return Promise.resolve()
}
