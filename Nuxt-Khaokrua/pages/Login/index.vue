<template>
  <div class="login-container">
    <v-card class="card-login" style="border-radius: 10px; margin-top: 50px">
      <v-row justify="center" class="title">
        <span class="login-title"> เข้าสู่ระบบ </span>
      </v-row>
      <v-form ref="form" lazy-validation>
        <div class="input-email">
          <v-text-field
            color="primary"
            solo
            rounded
            outlined
            v-model="account.email"
            required
            autocomplete="username"
            :rules="emailRules"
            placeholder="Email"
            name="email"
          ></v-text-field>
        </div>

        <div class="input-password">
          <v-text-field
            solo
            rounded
            outlined
            placeholder="Password"
            required
            min="9"
            autocomplete="password"
            :rules="passwordRules"
            v-model="account.password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            name="password"
          ></v-text-field>
        </div>

        <div class="action-form">
          <v-btn
            color="success"
            class="mr-4"
            @click="handleLoginClicked"
            id="btnLogin"
            name="btnLogin"
            style="width: 100%"
          >
            เข้าสู่ระบบ
          </v-btn>
        </div>

        <v-row justify="center">
          <p style="margin-right: 10px" class="text">ยังไม่มีบัญชีใช่มั้ย?</p>
          <router-link to="/signup">
            <p class="text">สมัครสมาชิก</p>
          </router-link>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data() {
    return {
      showPassword: false,
      account: {
        email: '',
        password: '',
      },
      valid: true,
      passwordRules: [
        (v) => !!v || 'ต้องการรหัสผ่าน',
        (v) => (v && v.length >= 6) || 'รหัสผ่านควรมีมากกว่า 6 ตัว',
      ],
      emailRules: [
        (v) => !!v || 'ต้องการอีเมล',
        (v) => /.+@.+\..+/.test(v) || 'อีเมลต้องมีอยู่',
      ],
    }
  },
  methods: {
    printData(){
      console.log('account', this.account)
    },
    async handleLoginClicked() {
      try {
        let response = await this.$auth.loginWith('local', { 
            data: {
              user: { email: this.account.email, password: this.account.password}
            } })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scope>

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

* {
  list-style: none;
  outline: none;
  font-family: 'Kanit', sans-serif;
  box-sizing: border-box;
}

.login-container {
  height: 100px;
}

.title {
  text-align: center;
  margin-bottom: 1em;
}

.login-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.card-login {
  padding: 30px;
  margin: 50px auto;
  max-width: 600px;
}

.action-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}

@media only screen and (max-width: 1264px) {
  .card-login {
    max-width: 800px;
  }
}

@media only screen and (max-width: 960px) {
  .card-login {
    width: 600px;
  }
}

@media only screen and (max-width: 600px) {
  .card-login {
    width: 300px;
  }
}
</style>