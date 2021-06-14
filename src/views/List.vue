<template>
  <v-container class="pa-0" fluid>
    <v-row class="ml-2 mt-2 mb-12 pa-0" align="center" justify="center">
      <v-col cols="12" offset-12>
        <v-breadcrumbs class="ml-6" :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="8" class="pa-6" offset-12>
        <v-card
          class="ma-0 pa-12 rounded-0"
          width="100%"
          outlined
        >
          <v-list-item one-line>
            <v-list-item-avatar
              rounded="0"
              size="160"
            >
              <img src="../assets/logo.png" />
            </v-list-item-avatar>

            <v-list-item-content class="ml-12">
              <v-list-item-title class="headline mb-1">缎纹100D SPH</v-list-item-title>
              <v-list-item-subtitle class="mt-4">
                <v-row>
                  <v-col cols="12">
                    匹配：97.95%
                  </v-col>
                  <v-col cols="4">
                    门幅：148cm
                  </v-col>
                  <v-col cols="8">
                    规格：50D+50D*100D
                  </v-col>
                  <v-col cols="4">
                    克重：160g/m<sup>2</sup>
                  </v-col>
                  <v-col cols="8">
                    成分：100%P
                  </v-col>
                  <v-col cols="4">
                    货号：B-0643
                  </v-col>
                  <v-col cols="8">
                    样号：花纹样册第 6 页
                  </v-col>
                </v-row>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-card-actions>
              <v-btn text x-large>在线下单</v-btn>
            </v-card-actions>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'List',

    created: function() {
      if (!('id' in localStorage)) {
        this.$router.push({name: 'Login'})
      } else if (this.$store.state.matched_list == null) {
        this.$router.push({name: 'Main'})
      }
    },

    data() {
      return {
        items: [
          {
            text: '找布',
            disabled: false,
            /* Use 'to' to take over 'href' to prevent global refreshing */
            to: 'search',
          },
          {
            text: '搜索结果（' + this.$store.state.matched_list.length + '）',
            disabled: true,
          },
        ],
      }
    },
  }
</script>