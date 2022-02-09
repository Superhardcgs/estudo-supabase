<template>
  <q-page padding>
    <div style="padding-top:25%;">

    </div>
      <q-form class="row justify-center">
        <p class="col-12 text-h5 text-center">Login</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
          label="Email"
          v-model="form.email"
          outlined
          rounded
          />
          <q-input
          label="Senha"
          v-model="form.password"
          outlined
          rounded
          type="password"
          />
          <div class="column items-center justify-center full-width q-pt-md">
            <q-btn
              label="Login"
              color="primary"
              class="items-right"
              rounded
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
  }

})
</script>
