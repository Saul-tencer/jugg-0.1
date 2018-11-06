<template>
  <div style="height:100%;width: 100%; background-color: #eee;position: fixed;top: 0;left: 0; z-index: 999;" @keyup.enter="confirm()">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12 pa-2">
            <v-img height="180" src="./static/JUGG.png"></v-img>
            <v-spacer></v-spacer>
            <v-card-text>
              <v-form>
                <!-- <v-text-field autocomplete="new-password" prepend-icon="contact_mail" name="E-mail" label="E-mail" type="text" v-model="formLabelLogin.email" v-validate="'required|email'" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field> -->
                <!-- <v-text-field autocomplete="new-password" prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="formLabelLogin.password" v-validate="'required|max:9|min:7'" :error-messages="errors.collect('password')" data-vv-name="password" required></v-text-field> -->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn :loading="isloading" large block color="primary" @click="confirm()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default{
  data () {
    return {}
  },
  methods: {
    confirm () {
      this.$store.commit('setLoading', true)
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
