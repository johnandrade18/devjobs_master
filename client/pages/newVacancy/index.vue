<template>
  <div>
    <NewVacancy/>
  </div>
</template>

<script>

export default {
  middleware: "isAuthenticated",
  layout: 'AuthReady',
};
</script>
