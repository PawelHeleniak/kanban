<script setup lang="ts">
import UserDashboard from '@/components/user/UserDashboard.vue'
import router from '@/router'

const logout = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="min-w-screen min-h-screen">
    <nav
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    >
      <div
        class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-slate-700 text-slate-50 flex flex-col gap-4 justify-between"
      >
        <div class="flex flex-col gap-2">
          <button class="bg-slate-600 hover:bg-slate-500 p-3 w-full rounded-xl">
            Panel użytkownika
          </button>
        </div>
        <div>
          <button
            class="bg-slate-600 hover:bg-slate-500 p-3 w-full rounded-xl"
            v-on:click="logout()"
          >
            Wyloguj
          </button>
        </div>
      </div>
    </nav>
    <main class="w-[calc(100%-256px)] h-full min-h-screen ml-[256px]! p-4 flex flex-col gap-4">
      <UserDashboard></UserDashboard>
    </main>
  </div>
</template>
