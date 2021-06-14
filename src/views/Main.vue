<template>
  <v-container fill-height fluid>
    <v-row class="mb-12" align="center" justify="center">
      <v-col cols="12" offset-12>
        <v-layout justify-center>
          <v-btn
            class="mx-auto py-6 rounded-xl"
            color="primary lighten-1"
            width="100"
            height="100"
            type="file"
            outlined
            @click="raiseFileUploadEvent"
          >
            <v-icon>mdi-camera-plus-outline</v-icon>
          </v-btn>
          <div style="display:none">
            <input
              type="file"
              id="uploadFileComponent"
              ref="uploadFileComponent"
              @change="uploadFile"
              accept="image/jpeg"
            />
          </div>
        </v-layout>
      </v-col>
      <v-col cols="12" offset-12>
        <v-layout justify-center>
          <span style="font-size:10pt">用 fatefeta 镜头拍照并上传照片</span>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import axios from 'axios'

  export default {
    name: 'Login',

    created: function() {
      if (!('id' in localStorage)) {
        this.$router.push({name: 'Login'})
      }
    },

    data() {
      return {
        fileInfo: null
      }
    },

    methods: {
      raiseFileUploadEvent() {
        document.getElementById("uploadFileComponent").click()
      },
      uploadFile() {
        const file = this.$refs.uploadFileComponent.files[0];

        if(!/image\/\w+/.test(file.type)){  
            return false;
        }

        this.$store.commit('matched_list', [])
        this.$router.push({name: 'List'});
      
        // axios.get('api/interface/blogs/all').then((response) => {
        //   console.info(response)
        // }).catch((error) => {
        //   console.info(error.response)
        // })
      }
    }
  }
</script>