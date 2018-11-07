<template>
  <div style="height:100%;width: 100%; background-color: #eee;position: fixed;top: 0;left: 0; z-index: 999;" @keyup.enter="confirm()">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5 lg5 xl4>
          <v-card class="elevation-12 pa-0">
            <v-img height="180" src="./static/JUGG.png"></v-img>
            <v-spacer></v-spacer>
            <v-card-text style="padding: 0px;" class="pl-3 pr-3 pb-2">
              <v-form>
                <v-text-field autocomplete="new-password" prepend-icon="mail" name="E-mail" label="E-mail" type="text" v-model="formLabelLogin.email" v-validate="'required|email'" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field>
                <v-text-field autocomplete="new-password" prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="formLabelLogin.password" v-validate="'required|max:9|min:7'" :error-messages="errors.collect('password')" data-vv-name="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-layout column align-center class="pl-2 pr-2">
              <v-btn :loading="isloading" medium block color="primary" @click="confirm()">Login</v-btn>
              <v-btn flat small color="primary">Register</v-btn>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default{
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      formLabelLogin: {
        email: '',
        password: ''
      },
      dictionary: {
        attributes: {
          email: 'E-mail Address'
        },
        password: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be less than 9 characters',
          min: 'The name field may not be more than 7 characters'
        }
      }
    }
  },
  methods: {
    confirm () {
      this.$store.commit('setLoading', true)
      this.axios.post('/user/login', this.formLabelLogin).then(response => {
        this.$store.commit('setLoading', false)
      }).catch(error => {
        this.$store.commit('setLoading', false)
        console.log(error.message)
      })
    }
  },
  computed: {
    isloading: {
      get () {
        return this.$store.state.Login.isloading
      },
      set (val) {
        return this.$store.commit('setLoading', val)
      }
    }
  }
}
</script>
