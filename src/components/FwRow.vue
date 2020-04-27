<template>
  <div class="flex-container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex-container {
  display: flex;
}

.flex-container > div {
  margin: 10px;
  padding: 20px;
}
</style>
