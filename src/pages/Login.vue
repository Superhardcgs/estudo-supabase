<template>
  <q-page padding>
    <div style="padding-top:15%;">
      <q-form class="row justify-center" @submit.prevent="handleLogin">
        <p class="col-12 text-h5 text-center">Login</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
          label="Email"
          v-model="form.email"
          outlined
          rounded
          />
          <q-input
          v-model='form.password'
          filled :type="isPwd ? 'password' : 'text'"
          label="Senha"
          outlined
          rounded
          >
          <!-- :rules="[val => val.length || 'Insira sua senha']" -->
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
            to="/register"/>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()

    const { login } = useAuthUser()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  },

  data () {
    return {
      isPwd: true
    }
  }

})
</script>
