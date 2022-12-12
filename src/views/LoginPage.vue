<template>
  <div class="page mt-2">
    <div class="d-flex flex-column align-items-center">
      <div class="p-2 mb-3">
        <h1 class="mb-3">StoreManager</h1>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">ID</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="login-button">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100%;
}
</style>
