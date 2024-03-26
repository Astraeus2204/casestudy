<template>
  <!-- Container for the Add Task section -->
  <div class="add-task-view">
    <!-- Heading for Add Task section -->
    <h1>Task Management</h1>
    <h2>Add Task</h2>

    <!-- Input field and button wrapper -->
    <div class="form-group">
      <!-- Wrapper for input field and button -->
      <div class="input-wrapper">
        <!-- Input field for entering new task -->
        <input type="text" v-model="newTask" placeholder="Enter New Task" class="task-input">
        <!-- Button to add a new task -->
        <button @click="addTask" class="add-button">Add Task</button>
      </div>
      <!-- Message and Error display -->
      <!-- Success message displayed when task is added -->
      <p class="message" v-if="message">{{ message }}</p>
      <!-- Error message displayed when input is empty -->
      <p class="error" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { taskList } from '../router/index.js';

export default {
  name: 'AddTaskPage',
  data() {
    return {
      // Data properties for AddTaskPage component
      taskList: taskList, // List of tasks
      error: '', // Error message
      message: '', // Success message
      newTask: '' // New task input
    };
  },
  methods: {
    // Method to add a new task
    addTask() {
      // Check if new task input is empty
      if (this.newTask.trim() === '') {
        // Set error message if input is empty
        this.error = "Please Enter a Task";
      } else {
        // Clear error message if input is valid
        this.error = "";
        // Add new task to the task list
        taskList.push({ id: taskList.length + 1, text: this.newTask, completed: false });
        // Clear input field after adding task
        this.newTask = '';
        // Set success message after adding task
        this.message = "New Task Added!";
        // Hide the message after a short delay
        setTimeout(() => {
          this.message = '';
        }, 2000);
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
  color: #000000;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  /* Rounded corners, background color, and box shadow for visual appearance */
  border-radius: 8px;
  background-color: #ffffff;
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
  background-color: #237550;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  /* Smooth transition for hover effect */
  transition: background-color 0.3s ease;
}

.add-button:hover {
  /* Change background color on hover */
  background-color: #368962;
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
</style>
