<template>
  <div>
    <Signup />
  </div>
</template>

<script>
export default {
  middleware: 'isRedirect',
  layout: 'LayoutSignup',
}
</script>
