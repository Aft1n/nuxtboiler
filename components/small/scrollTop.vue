<script setup>
const { scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: "smooth",
      offsetTop: 0,
    },
  },
});
</script>
<template>
  <button
    fixed
    bottom-5
    right-2
    @click="scrollToTop()"
    id="al"
    aria-label="Scroll to top"
  >
    <!-- <UIcon
      w-8
      h-8
      dynamic
      name="i-material-symbols-light-arrow-circle-up-outline"
    /> -->
  </button>
</template>
