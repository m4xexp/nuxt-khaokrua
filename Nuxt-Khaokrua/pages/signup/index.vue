<template>
  <div class="signup-container">
    <v-card class="card-signup" style="border-radius: 10px; margin-top: 30px">
      <v-row justify="center" class="title">
        <span class="signup-title"> สมัครสมาชิก </span>
      </v-row>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              solo
              outlined
              rounded
              v-model="user.firstname"
              :rules="nameRules"
              label="ชื่อ"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              solo
              outlined
              rounded
              v-model="user.lastname"
              :rules="nameRules"
              label="นามสกุล"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="input-email">
          <v-text-field
            color="primary"
            solo
            rounded
            outlined
            v-model="user.email"
            required
            autocomplete="username"
            :rules="emailRules"
            placeholder="อีเมล"
            name="email"
          ></v-text-field>
        </div>

        <div class="input-password">
          <v-text-field
            solo
            rounded
            outlined
            placeholder="รหัสผ่าน"
            required
            min="9"
            autocomplete="password"
            :rules="passwordRules"
            v-model="user.password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            name="password"
          ></v-text-field>
        </div>

        <div class="input-confirm-password">
          <v-text-field
            solo
            rounded
            outlined
            placeholder="ยืนยันรหัสผ่าน"
            required
            min="9"
            autocomplete="password"
            :rules="passwordRules"
            v-model="user.password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            name="conPassword"
          ></v-text-field>
        </div>

        <div class="action-form">
          <v-btn
            color="success"
            class="mr-4"
            @click="validate"
            id="btnLogin"
            name="btnLogin"
            style="width: 100%"
          >
            สมัครสมาชิก
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'signup',
  components: {},
  data() {
    return {
      showPassword: false,
      user: {
        firstname: '',
        lastname: '',
        username: '',
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
    submit() {
      var state = this.$refs.form.validate()
      if (state) {
        this.$store.dispatch({
          type: 'doLogin',
          email: this.account.email,
          password: this.account.password,
        })
      }
    },
  },
}
</script>

<style scope>
.signup-container {
  height: 100px;
}

.title {
  text-align: center;
  margin-bottom: 1em;
}

.signup-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.card-signup {
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
  .card-signup {
    max-width: 800px;
  }
}

@media only screen and (max-width: 960px) {
  .card-signup {
    width: 600px;
  }
}

@media only screen and (max-width: 600px) {
  .card-signup {
    width: 300px;
  }
}
</style>