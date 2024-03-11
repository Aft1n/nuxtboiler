<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSchemaOrg([
  defineWebPage({
    name: "Index",
  }),
  defineWebSite({
    name: "MyWebsite.com",
  }),
]);
</script>
