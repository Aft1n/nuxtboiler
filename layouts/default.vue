<template>
  <NuxtLoadingIndicator />
  <div class="app">
    <slot />
  </div>
  <SmallScrollTop />
</template>

<style lang="scss">
.app {
  min-height: -webkit-fill-available;
  margin-top: 50px;
  margin-bottom: 150px;
  min-height: 100vh;
  padding-inline: 1px;
  display: flex;
  justify-content: center;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
