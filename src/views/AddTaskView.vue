<template>
  <div class="add-task-view">
    <!-- HelloWorld component with welcome message -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Heading for Add Task section -->
    <h1>Task Management</h1>
    <h2>Add Task</h2>
    <div class="form-group">
      <!-- Input field and button wrapper -->
      <div class="input-wrapper">
        <input type="text" v-model="newTask" placeholder="Enter task" class="task-input">
        <button @click="addTask" class="add-button">Add Task</button>
      </div>
    </div>

    <!-- Message and Error display -->
    <p class="message" v-if="message">{{ message }}</p>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { taskList } from '../data/items.js';
export default {
  name: 'AddTaskView',
  data() {
    return {
      // Task list data initialized from external source
      taskList: taskList,
      // Error and message states for user feedback
      error: '',
      message: '',
      // Input field for new task
      newTask: ''
    };
  },
  methods: {
    // Function to increment task ID (not currently in use)
    incrementId() {
      taskList.id++
    },
    // Function to add a new task
    addTask() {
      // Validate new task input
      if (this.newTask.trim() === '') {
        // Show error if input is empty
        this.error = "Please enter a task";
      } else {
        // Clear error if input is valid
        this.error = "";
        // Add new task to the task list
        taskList.push({ id: taskList.length + 1, text: this.newTask, completed: false });
        // Clear input field after adding task
        this.newTask = '';
        // Show success message after adding task
        this.message = "New task added!";
      }
    },
  },
};
</script>

<style scoped>
/* Styles specific to the AddTaskView component */

.add-task-view {
  /* Center the component horizontally and provide padding */
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  /* Rounded corners, background color, and box shadow for visual appearance */
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  /* Provide space below the form elements */
  margin-bottom: 20px;
}

.input-wrapper {
  /* Arrange input field and button horizontally */
  display: flex;
  justify-content: space-between;
  /* Styling for input field and button container */
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-input {
  /* Make input field take up remaining space */
  flex: 1;
  /* Provide padding and rounded corners */
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.add-button {
  /* Styling for the Add Task button */
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  /* Smooth transition for hover effect */
  transition: background-color 0.3s ease;
}

.add-button:hover {
  /* Change background color on hover */
  background-color: #45a049;
}

.message,
.error {
  /* Styling for message and error display */
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}

.message {
  /* Styles for success message */
  color: #155724;
  background-color: #d4edda;
}

.error {
  /* Styles for error message */
  color: #721c24;
  background-color: #f8d7da;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
