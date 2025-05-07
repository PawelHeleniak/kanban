<script setup lang="ts">
const date = new Date()
const day = date.getDay()
const dayMonth = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

const dayArray: string[] = [
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela',
]
const monthArray: string[] = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
]
</script>
<template>
  <div class="bg-slate-50 p-4 rounded-xl">
    <div>
      <div>{{ dayArray[day - 1] }}, {{ dayMonth }} {{ monthArray[month - 1] }} {{ year }}</div>
      <div class="text-2xl">Cześć, UserTest</div>
    </div>
  </div>
  <div class="bg-slate-50 p-4 rounded-xl">
    <div class="max-w-[1200px] flex flex-row gap-6 justify-between mx-auto!">
      <div class="flex flex-1 justify-center rounded-xl overflow-hidden">
        <div class="w-full bg-slate-200">
          <div class="bg-rose-600 text-slate-50 py-2 px-3 text-center font-bold">Backlog</div>
          <div class="text-2xl p-2 text-center text-slate-600">10</div>
        </div>
      </div>
      <div class="flex flex-1 justify-center rounded-xl overflow-hidden">
        <div class="w-full bg-slate-200">
          <div class="bg-amber-600 text-slate-50 py-2 px-3 text-center font-bold">In progress</div>
          <div class="text-2xl p-2 text-center text-slate-600">3</div>
        </div>
      </div>
      <div class="flex flex-1 justify-center rounded-xl overflow-hidden">
        <div class="w-full bg-slate-200">
          <div class="bg-emerald-600 text-slate-50 py-2 px-3 text-center font-bold">Review</div>
          <div class="text-2xl p-2 text-center text-slate-600">4</div>
        </div>
      </div>
      <div class="flex flex-1 justify-center rounded-xl overflow-hidden">
        <div class="w-full bg-slate-200">
          <div class="bg-sky-600 text-slate-50 py-2 px-3 text-center font-bold">Done</div>
          <div class="text-2xl p-2 text-center text-slate-600">34</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="mb-2!">Przypięte projekty</div>
    <div class="flex flex-wrap gap-6">
      <div
        class="w-[150px] h-[120px] bg-slate-50 p-4 rounded-xl flex justify-center items-center text-xl"
      >
        Projekt 1
      </div>
    </div>
  </div>
  <div>
    <div class="mb-2!">Wszystkie projekty</div>
    <div class="flex flex-wrap gap-6">
      <div
        class="w-[150px] h-[120px] bg-slate-50 p-4 rounded-xl flex justify-center items-center text-xl"
      >
        Projekt 1
      </div>
      <div
        class="w-[150px] h-[120px] bg-slate-50 p-4 rounded-xl flex justify-center items-center text-xl"
      >
        Projekt 2
      </div>
    </div>
  </div>
</template>

<style scoped></style>
