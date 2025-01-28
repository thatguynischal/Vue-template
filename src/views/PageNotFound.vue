<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div>
      <h1>Oops! That Page can't be found.</h1>
      <p>It looks like nothing was found at this location.</p>
      <div>
        <RouterLink :to="{ name: 'dashboard' }">Go to Dashboard</RouterLink>
      </div>
    </div>
  </div>
</template>
