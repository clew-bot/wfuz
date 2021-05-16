<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item">
        <i class="copyright icon"></i>
      </li>
      <li class="side-nav__item">
        <i class="phone icon" size="large"></i>
      </li>
      <li class="side-nav__item">
        <i class="thumbtack icon"></i>
      </li>
      <li class="side-nav__item">
        <i class="code icon"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
li {
  list-style: none;
}

.side-nav__item {
  margin-top: 3rem;
  margin-right: 2.5rem;
}

.side-nav {
  border: solid gray 2px;
}
</style>
