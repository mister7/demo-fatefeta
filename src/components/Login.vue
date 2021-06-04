<template>
  <v-container fill-height fluid>
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
              <v-text-field label="用户名 / 手机号码 / 邮件地址"/>
            </v-col>
            <v-col cols="12">
              <v-text-field label="密码" type="password"/>
            </v-col>
            <v-col :cols="['xs'].includes($vuetify.breakpoint.name)?6:8">
              <v-text-field label="验证码"/>
            </v-col>
            <v-col :cols="['xs'].includes($vuetify.breakpoint.name)?6:4">
              <div @click="refreshAuthCode">
                <AuthCode :identifyCode="identifyCode"></AuthCode>
              </div>
            </v-col>
            <v-col class="mt-6" cols="12">
              <v-btn class="mx-auto py-6 rounded-xl" color="primary lighten-1" width="100%" type="submit" elevation="0">
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
      identifyCode: '123456'
    }),

    methods: {
      refreshAuthCode() {
        this.identifyCode = "";
        this.makeAuthCode(this.identifyCodes, 4);
        console.info('Auth Code refreshed: ' + this.identifyCode)
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
        console.log(this.identifyCode);
      },
    },

    mounted() {
      this.refreshAuthCode();
    },
  }
</script>
