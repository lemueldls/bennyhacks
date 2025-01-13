<script setup lang="ts">
const props = defineProps<{ time: number }>();

const duration = computed(() => {
  let time = props.time;

  const milliseconds = time % 1000;
  time = Math.floor(time / 1000);

  const seconds = time % 60;
  time = Math.floor(time / 60);

  const minutes = time % 60;
  time = Math.floor(time / 60);

  const hours = time % 24;
  time = Math.floor(time / 24);

  const days = time;

  return { milliseconds, seconds, minutes, hours, days };
});
</script>

<template>
  <div class="countdown text-4xl">
    <div class="duration">
      <span class="duration__number bg-primary text-white">{{ duration.days }}</span>
      <span class="text-lg">Days</span>
    </div>
    <div class="duration">
      <span class="duration__number bg-secondary text-white">{{ duration.hours }}</span>
      <span class="text-lg">Hours</span>
    </div>
    <div class="duration">
      <span class="duration__number bg-success text-white">{{ duration.minutes }}</span>
      <span class="text-lg">Minutes</span>
    </div>
    <div class="duration">
      <span class="duration__number bg-warning text-black">{{ duration.seconds }}</span>
      <span class="text-lg">Seconds</span>
    </div>
    <!-- <div class="duration">
      <span class="duration__number bg-danger text-white">{{ duration.milliseconds }}</span>
      <span class="text-lg">Milliseconds</span>
    </div> -->
  </div>
</template>

<style scoped>
.countdown {
  @apply flex justify-evenly;
}

.duration {
  @apply flex flex-col items-center;

  /* font-weight: 500; */
}

.duration__number {
  @apply flex items-center justify-center ;

  border-radius: 0.75rem;
  width: 4rem;
  height: 4rem;
  font-weight: 800;
}
</style>
