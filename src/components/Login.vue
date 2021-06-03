<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="8" md="6" lg="6" xl="4">
        <v-card color="gray lighten-2" class="pa-12 rounded-xl">
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
            <v-col cols="8">
              <v-text-field label="验证码"/>
            </v-col>
            <v-col cols="4">
              <img @click="refreshAutheniticationCode()" class="pb-3" src="https://picsum.photos/510/300?random" width="100%" height="60px"/>
            </v-col>
            <v-col cols="12">
              <a style="display:block;text-align:right;color='black';font-size:0.9em;margin-right:5%">忘记密码</a>
            </v-col>
            <v-col class="mt-6" cols="12">
              <v-btn class="mx-auto py-6 rounded-xl" color="primary lighten-1" width="100%" type="submit" elevation="0">
                登录
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',

    data: () => ({
    }),

    methods: {
      refreshAutheniticationCode() {
        var rndNum = Math.ceil(Math.random()*10);
        this.imgCode = "https://picsum.photos/510/300?random?" + rndNum;
        console.info(this.imgCode)
      }
    }
  }
</script>
