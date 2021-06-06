<template>
  <v-container fill-height fluid>
    <v-row class="mb-12" align="center" justify="center">
      <v-col cols="12" offset-12  v-if="img_src===null">
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
      <v-col cols="12" offset-12 v-if="img_src===null">
        <v-layout justify-center>
          <span style="font-size:10pt">用 fatefeta 镜头拍照并上传照片</span>
        </v-layout>
      </v-col>
      <v-col cols="12" offset-12 v-if="img_src!==null">
        <v-layout justify-center>
          <img :src="img_src" width="50%"/>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',

    data() {
      return {
        formData: new FormData(),
        fileInfo: null,
        img_src: null
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
      
        this.img_src = URL.createObjectURL(file)
      }
    }
  }
</script>