<script setup lang="ts">
import { ref } from 'vue'
import type { Login } from '@/models/userModel'
import { submitForm } from '@/services/authService'
import router from '@/router'

const error = ref<string>('')
const isError = ref<boolean>(false)

const loginForm = ref<Login>({
  email: '',
  password: '',
})
const loginFormError = (): boolean => {
  if (!loginForm.value.email || !loginForm.value.password) return true
  return false
}

const login = async () => {
  if (loginFormError()) return

  isError.value = false
  try {
    const response = await submitForm(loginForm.value)
    const success = await response.json()
    if (success) router.push({ path: '/panel' })
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message ? err.message : 'Błąd serwera'
      isError.value = true
    }
  }
}
</script>
<template>
  <h2 class="text-2xl my-4! text-center">Zaloguj się</h2>
  <form action="" class="flex flex-col gap-2 w-100">
    <div class="form-field">
      <label for="">Email</label>
      <input type="email" placeholder="Email" v-model="loginForm.email" />
    </div>
    <div class="form-field">
      <label for="">Hasło</label>
      <input type="password" placeholder="Hasło" v-model="loginForm.password" />
    </div>
    <button
      type="button"
      v-on:click="login()"
      class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-4!"
    >
      Zaloguj się
    </button>
    <small v-if="isError">{{ error }}</small>
  </form>
</template>

<style scoped></style>
