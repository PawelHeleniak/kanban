<script setup lang="ts">
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
const swapAuth = () => {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <div class="flex bg-slate-50 rounded-xl relative w-[900px] h-[500px]">
    <div class="panel auth flex w-1/2 p-6 flex-col" :class="{ hide: !isLogin }">
      <LoginForm></LoginForm>
    </div>
    <div class="panel auth flex w-1/2 p-6 flex-col" :class="{ hide: isLogin }">
      <RegisterForm></RegisterForm>
    </div>
    <div
      class="panel flex flex-col absolute right-0 right-[24px] top-[24px] rounded-xl p-6 w-[426px] h-[450px] m-8 items-center bg-teal-100 justify-center"
      :class="{ register: !isLogin }"
    >
      <h1 class="text-xl">Witaj!</h1>
      <div>{{ isLogin ? 'Nie masz jeszcze konta?' : 'Masz już konto?' }}</div>
      <button
        v-on:click="swapAuth()"
        class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-4!"
      >
        {{ isLogin ? 'Zarejestruj się' : 'Zaloguj się' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.panel {
  transition:
    0.2s ease-in transform,
    0.1s ease-in opacity;
}
.panel.register {
  transform: translateX(-100%);
}
.panel.hide {
  opacity: 0;
}
</style>
