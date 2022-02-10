<template>
  <q-page padding>
    <div style="padding-top:15%;">

    </div>
      <q-form class="row justify-center" @submit.prevent="">
        <p class="col-12 text-h5 text-center">Login</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
          label="Email"
          v-model="form.email"
          outlined
          rounded
          />
          <q-input
            v-model="form.password"
            filled :type="isPwd ? 'password' : 'text'"
            label="Senha"
            outlined
            rounded
            :rules="[val => val.length || 'Insira sua senha']"
          >
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" standout @click="isPwd = !isPwd"/>
            </template>
          </q-input>
          <div class="column items-center justify-center full-width q-pt-md">
            <q-btn
              label="Login"
              color="primary"
              class="items-right"
              rounded
              size="lg"
              type="submit"/>
          </div>
          <div class="column items-center justify-center full-width q-pt-md">
            <q-btn
              label="Registrar"
              color="primary"
              class="items-right"
              flat
              size="md"
              type="submit"/>
          </div>
        </div>
      </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const form = ref({
      email: '',
      password: ''
    })

    return {
      form
    }
  },

  data () {
    return {
      isPwd: true
    }
  }

})
</script>
