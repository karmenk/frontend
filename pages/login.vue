<template>
  <div class="container login">
    <div class="login-container" :class="{ error: isError }">
      <div class="logo">
        Log In
      </div>
      <div class="login-item">
        <form action="" method="post" class="form form-login">
          <div class="form-field">
            <label class="user" for="login-username"><span class="hidden">Username</span></label>
            <input id="login-username" v-model="username" type="text" class="form-input" placeholder="Username">
          </div>

          <div class="form-field">
            <label class="lock" for="login-password"><span class="hidden">Password</span></label>
            <input id="login-password" v-model="password" type="password" class="form-input" placeholder="Password">
          </div>

          <div v-if="isError" class="error-message"><span>{{ errorMessage }}</span></div>
          <div class="form-field">
            <a href="#" class="btn primary" @click.prevent="signIn()">Log in</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isError: false,
      errorMessage: ''
    }
  },
  methods: {
    signIn () {
      this.resetError()
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      }).then((result) => {
        if (result.data.token) {
          this.$router.push('/')
        } else {
          this.isError = true
          this.errorMessage = 'Something went wrong. Please try again'
        }
      }).catch((error) => {
        this.isError = true
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = 'Something went wrong. Please try again'
        }
      })
    },
    resetError () {
      this.isError = false
      this.errorMessage = ''
    }
  }
}
</script>

<style>
.login {
  background-color: steelblue;
  display: flex;
  height: 100vh;
  justify-content:center;
  align-items:center;
}

.login-container {
  border: none;
  background:rgba(58,63,68,0.5);
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width:450px;
  display: flex;
  flex-direction: column;
}

.logo{
  font-family: "museo-slab";
  font-size:20px;
  text-align: center;
  padding: 1.4rem 1.4rem 0;
  margin:0;
}

.login-item {
  color: #ffff;
  padding:25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
}

input, a {
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
}

.user:before {
  content: '\f007';
  font: 14px fontawesome;
  color: #5b5b5b;
}

.lock:before {
  content: '\f023';
  font: 14px fontawesome;
  color: #5b5b5b;
}

.form input[type="password"], .form input[type="text"], .form a {
  width: 100%;
}

.form-login label,
.form-login input[type="text"],
.form-login input[type="password"],
.form-login a {
  border-radius: 0.25rem;
  padding: 1rem;
  color: #3A3F44;
}

.form-login label {
  background-color: #222222;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.form-login input[type="text"], .form-login input[type="password"] {
  background-color: #ffffff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-login input[type="text"]:focus, .form-login input[type="text"]:hover, .form-login input[type="password"]:focus, .form-login input[type="password"]:hover {
  background-color: #eeeeee;
}

.form-login a {
  text-decoration: none;
  background-color: #00B9BC;
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
}

.form-login a:focus, .form-login a:hover {
  background-color: #197071;
}

.form-field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  text-align: center;
}

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.login-container.error {
  border: 1px solid #ef393c;
}

.error-message {
  display: flex;
  color: #ef393c;
  padding: 0.5rem 0;
}
</style>
