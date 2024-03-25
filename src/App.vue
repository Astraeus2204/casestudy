<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Add Task</router-link>
    <span class="divider">||</span>
    <router-link to="/taskList" class="nav-links">Task List</router-link> 
  </nav>
  <router-view/>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
}

.nav-link, .nav-links {
  color: rgb(8, 1, 1);
  text-decoration: none;
  margin: 0 10px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #42b983;
}
.nav-links:hover {
  background-color: #0ebfcc;
}
.divider {
  color: rgb(7, 1, 1);
  margin: 0 5px;
}

.router-link-active {
  font-weight: bold;
}

</style>
