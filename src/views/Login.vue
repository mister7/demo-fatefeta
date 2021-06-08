<template>
  <v-container fill-height fluid>
    <v-snackbar
      justify="center"
      light
      centered
      v-model="failedToLogin"
      timeout=1000
    >
      {{reasonableOfLoginFailure}}
    </v-snackbar>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="8" md="6" lg="6" xl="4">
        <v-card
          :color="['xs'].includes($vuetify.breakpoint.name)?'':'gray lighten-2'"
          :elevation="['xs'].includes($vuetify.breakpoint.name)?'0':'3'"
          class="pa-12 rounded-xl"
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <center><h3>用户登录</h3></center>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="用户名 / 手机号码 / 邮件地址"
                v-model="loginUser"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="密码"
                type="password"
                v-model="loginPass"
              >
              </v-text-field>
            </v-col>
            <v-col :cols="['xs'].includes($vuetify.breakpoint.name)?6:8">
              <v-text-field
                label="验证码"
                v-model="loginAuthCode"
              >
              </v-text-field>
            </v-col>
            <v-col :cols="['xs'].includes($vuetify.breakpoint.name)?6:4">
              <div @click="refreshAuthCode">
                <AuthCode :identifyCode="identifyCode"></AuthCode>
              </div>
            </v-col>
            <v-col class="mt-6" cols="12">
              <v-btn
                class="mx-auto py-6 rounded-xl"
                color="primary lighten-1"
                width="100%"
                type="submit"
                elevation="0"
                @click.prevent="login"
              >
                登录
              </v-btn>
            </v-col>
            <v-col cols="12">
              <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  target="_blank"
                  text
                >
                  <span v-if="!['xs'].includes($vuetify.breakpoint.name)">忘记密码</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AuthCode from '@/components/AuthCode'

  export default {
    name: 'Login',

    components: {
      AuthCode
    },

    data: () => ({
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      identifyCode: '123456',
      failedToLogin: false,
      reasonableOfLoginFailure: '',
      loginUser: '',
      loginPass: '',
      loginAuthCode: '',
    }),

    methods: {
      refreshAuthCode() {
        this.identifyCode = "";
        this.makeAuthCode(this.identifyCodes, 4);
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      makeAuthCode(o, l) {
        for (let i = 0; i < l; i++) {

          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ]
        }
      },
      login() {
        if (this.loginUser == '') {
          this.reasonableOfLoginFailure = '青输入用户名/手机号'
          this.failedToLogin = true
        } else if(this.loginPass == '') {
          this.reasonableOfLoginFailure = '青输入密码'
          this.failedToLogin = true
        } else if(this.loginAuthCode == '') {
          this.reasonableOfLoginFailure = '青输入验证码'
          this.failedToLogin = true
        } else if ((this.loginUser != 'tester') || (this.loginPass != '123456')) {
          this.reasonableOfLoginFailure = '用户不存在或密码错误'
          this.failedToLogin = true
        } else if(this.loginAuthCode.toUpperCase() != this.identifyCode.toUpperCase()) {
          this.reasonableOfLoginFailure = '验证码错误'
          this.failedToLogin = true
          this.loginAuthCode = ''
          this.refreshAuthCode()
        } else {
          this.$store.commit('session_in', {
            id: 12,
            username: 'tester',
            avatar: null,
            is_admin: false,
            updated_at: new Date(),
            expirity: 8 * 60 * 60
          })

          this.$router.push({name: 'Main'});
        }
      }
    },

    mounted() {
      this.refreshAuthCode();
    },
  }
</script>
