<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto me-lg-5">
        <a href="/"
          ><img
            src="@/assets/img/logo_header_blanco.png"
            alt=""
            class="img-fluid w-10"
        /></a>
      </h1>
      <nav id="navbar" class="navbar order-last ms-2 order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li>
            <form class="nav-link scrollto d-flex ms-lg-5 ps-lg-5">
              <input
                type="search"
                id="form"
                class="form-control form-control-dark"
                placeholder="Search..."
              />
              <button type="submit" class="btn btn-outline-success ms-2 me-2">
                <i class="bx bx-search-alt-2"></i>
              </button>
            </form>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
      <div>
        <a href="/signin" class="get-started-btn scrollto me-0">Sign In</a>
        <a href="/signup" class="get-started-btn scrollto me-0">Sign Up</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
<style>
.ap-1 {
  padding: 10px !important;
}
.navbar {
  color: black;
}
</style>