<template>
  <q-page padding="">
    <p class="text-body1">
      Obrigado por se registar em nossa loja virtual!
    </p>
    <p class="text-body1">
      Em instantes, enviaremos um e-mail solicitando a confirmação da conta criada através de: <strong>{{ $route.query.email }}</strong>
    </p>
    <p>Solicitamos que verifique o email para que possa continuar.</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
