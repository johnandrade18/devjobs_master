<template>
  <div>
    <Signin />
  </div>
</template>

<script>
export default {
  middleware: 'isRedirect',
  layout: 'LayoutSignin',
}
</script>
