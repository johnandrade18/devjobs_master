<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <nav
      class="d-flex justify-content-between navbar navbar-expand-lg navbar order-last order-lg-0"
    >
      <h1 class="logo me-lg-0 ">
       <router-link to="/" exact-path class="nav-link scrollto"><img
            src="@/assets/img/logo_header_blanco.png"
            alt=""
            class="img-fluid"
        /></router-link>
      </h1>

      <ul>
        <li>
          <router-link to="/jobs-list" exact-path class="nav-link scrollto">Lista de trabajos</router-link>
        </li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
      <form class="d-flex me-lg-5 ms-auto">
        <input
          type="search"
          id="form"
          class="form-control form-control-dark"
          placeholder="Search..."
        />
        <button type="submit"><i class='bx bx-search-alt-2'></i></button>
        <button type="button" class="btn btn-outline-success">search</button>
      </form>
      <div class="d-flex">
        <router-link to="/signin" exact-path  class="get-started-btn scrollto m-1 center ap-1">Iniciar sesión</router-link>
        <router-link to="/signup" exact-path class="get-started-btn scrollto m-1 center ap-1">Registrarse</router-link>
      </div>
    </nav>
  </header>
  <!-- End Header -->
</template>
<script></script>
<style>
.ap-1 {
  padding: 10px !important;
}
.navbar {
  color: black;
}
</style>
