<template>
  <q-page padding>
    <div style="padding-top:15%;">
      <q-form class="row justify-center" @submit.prevent="handleRegister">
        <p class="col-12 text-h5 text-center">Registrar</p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-input
            label="Nome"
            v-model="form.name"
            outlined
            rounded
            />
            <q-input
            label="Email"
            outlined
            v-model="form.email"
            rounded
            />
            <q-input
            filled :type="isPwd ? 'password' : 'text'"
            label="Senha"
            v-model="form.password"
            outlined
            rounded
            >
            <!-- :rules="[val => val.length || 'Insira sua senha']" -->
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" standout @click="isPwd = !isPwd"/>
            </template>
            </q-input>
          </div>
          <div class="column items-center justify-center full-width q-pt-md">
            <q-btn
              label="Registrar"
              color="primary"
              class="items-right"
              rounded
              size="lg"
              type="submit"/>
          </div>
          <div class="column items-center justify-center full-width q-pt-md">
            <q-btn
            label="Já possuo cadastro"
            color="primary"
            class="items-right"
            flat
            size="md"
            to="/"/>
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
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error)
      }
    }

    return {
      form,
      handleRegister
    }
  },

  data () {
    return {
      isPwd: true
    }
  }
})

</script>
