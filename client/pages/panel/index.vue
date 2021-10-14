<template>
  <div>
      <Panel/>
  </div>
</template>

<script>

export default {
    middleware: "isAuthenticated",
};
</script>
