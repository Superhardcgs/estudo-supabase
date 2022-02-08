<template>
  <q-page padding>
    <p class="text-h6">
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
          label="Password"
          v-model="form.password"
          outlined
          rounded
          />
          <div class="full width q-pt-md">
            <q-btn
              label="Login"
              color="primary"
              class="full-width"
              rounded
              size="lg"
              type="submit"/>
          </div>
        </div>
      </q-form>
    </p>
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
