<template>
  <q-page padding="">
    <p class="text-body1">
      Obrigado por se registar em nossa loja virtual!
    </p>
    <p class="text-body1">
      Por favor, confirme o registro da sua conta através do email: <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
