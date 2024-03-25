<template>
  <!-- Navigation bar containing links -->
  <nav class="navbar">
    <!-- Router link for adding task -->
    <router-link to="/" class="nav-link">Add Task</router-link>
    <!-- Divider between links -->
    <span class="divider">||</span>
    <!-- Router link for viewing task list -->
    <router-link to="/taskList" class="nav-links">Task List</router-link> 
  </nav>
  <!-- Router view to render component based on route -->
  <router-view/>
</template>

<style scoped>
/* Scoped styles for the navigation bar */
.navbar {
  /* Flex layout for horizontal alignment */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Background color and padding */
  background-color: #ffffff;
  padding: 10px;
}

/* Styles for navigation links */
.nav-link, .nav-links {
  /* Text color, no underlines */
  color: rgb(8, 1, 1);
  text-decoration: none;
  /* Margin and padding for spacing */
  margin: 0 10px;
  padding: 8px 16px;
  /* Rounded corners */
  border-radius: 5px;
  /* Transition for hover effect */
  transition: background-color 0.3s ease;
}

/* Hover effect for Add Task link */
.nav-link:hover {
  background-color: #42b983;
}

/* Hover effect for Task List link */
.nav-links:hover {
  background-color: #0ebfcc;
}

/* Styles for divider */
.divider {
  /* Text color and margin */
  color: rgb(7, 1, 1);
  margin: 0 5px;
}

/* Active link styling */
.router-link-active {
  font-weight: bold;
}
</style>
