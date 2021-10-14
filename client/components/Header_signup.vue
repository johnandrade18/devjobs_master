<template>
  <header id="header" class="fixed-top bg-dark">
    <div class="container d-flex align-items-center justify-content-lg-between">
      <h1 class="logo me-auto me-lg-5">
        <a href="/"
          ><img
            src="@/assets/img/logo_header_blanco.png"
            alt=""
            class="img-fluid w-10"
        /></a>
      </h1>
      <!-- .navbar -->
      <div>
        <a href="/" class="get-started-btn scrollto me-0">Home</a>
        <a href="/signin" class="get-started-btn scrollto me-0">Sign in</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-dark {
  background-color: black !important;
}
</style>
