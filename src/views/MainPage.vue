<template>
  <div class="d-flex justify-items-center align-items-center">
    <SideBar />
      <Profile />
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import Profile from "../components/StoreProfile.vue";
</script>

<style Lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
}

* {
  margin: 0;
  padding: 0;
}
</style>