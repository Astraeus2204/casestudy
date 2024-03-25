<template>
  <!-- Container for the task list -->
  <div class="task-list-container">
    <!-- Heading for the task list -->
    <h1>Task List</h1>

    <!-- Wrapper for the task list items -->
    <div class="task-list-wrapper">
      <ul class="task-list">
        <!-- Loop through each task item -->
        <li v-for="task in taskList" :key="task.id" class="task-item">
          <div class="task-details">
            <!-- Checkbox for task completion status -->
            <input type="checkbox" v-model="task.completed" class="task-checkbox">
            <!-- Display task text with optional strike-through if completed -->
            <span v-if="editedTask !== task.id" :class="{ completed: task.completed }">{{ task.text }}</span>
            <!-- Input field for editing task text -->
            <input v-else type="text" v-model="task.text" class="edit-input">
          </div>
          <!-- Action buttons for each task item -->
          <div class="task-actions">
            <!-- Button to toggle between editing and saving task -->
            <button @click="editTask(task)" class="edit-button">{{ editedTask !== task.id ? 'Edit' : 'Save' }}</button>
            <!-- Button to delete the task -->
            <button @click="deleteTask(task)" class="delete-button">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Message displayed when no tasks are available -->
    <div v-if="taskList.length === 0" class="empty-list-message">
      No tasks available
    </div>
    <!-- Summary of total and completed tasks -->
    <div v-else class="task-summary">
      <p>Total tasks: {{ totalTasks }}</p>
      <p>Completed tasks: {{ completedTasks }}</p>
      <p>Message: {{ taskMessage }}</p>
    </div>
  </div>
</template>

<script>
import { taskList } from '../data/items.js';

export default {
  data() {
    return {
      // Array to store the list of tasks
      taskList: taskList,
      // ID of the task being edited (null if none)
      editedTask: null
    };
  },
  methods: {
    // Method to delete a task from the list
    deleteTask(task) {
      const index = this.taskList.findIndex(t => t.id === task.id);
      this.taskList.splice(index, 1);
    },
    // Method to toggle task editing mode
    editTask(task) {
      // If the task is being edited, set editedTask to null
      // Otherwise, set editedTask to the ID of the task being edited
      if (this.editedTask === task.id) {
        this.editedTask = null;
      } else {
        this.editedTask = task.id;
      }
    }
  },
  computed: {
    // Computed property to calculate total number of tasks
    totalTasks() {
      return this.taskList.length;
    },
    // Computed property to calculate number of completed tasks
    completedTasks() {
      return this.taskList.filter(task => task.completed).length;
    },
    // Computed property to generate a message based on completion status of tasks
    taskMessage() {
      if (this.completedTasks === 0) {
        return 'No tasks completed';
      } else if (this.completedTasks < this.totalTasks) {
        return 'Some tasks completed';
      } else {
        return 'All tasks completed';
      }
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the TaskList component */

.task-list-container {
  /* Center the container horizontally */
  max-width: 800px;
  margin: 0 auto;
}

.task-list-wrapper {
  /* Styling for the task list wrapper */
  border: 1px solid #ddd; /* Add border with a lighter color */
  border-radius: 5px;
  padding: 20px; /* Add padding for spacing */
}

.task-list {
  /* Remove default list styles */
  list-style-type: none;
  padding: 0;
}

.task-item {
  /* Layout for each task item */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-details {
  /* Styling for task details section */
  display: flex;
  align-items: center;
}

.task-checkbox {
  /* Style for the task completion checkbox */
  margin-right: 10px;
}

.completed {
  /* Apply strike-through to completed tasks */
  text-decoration: line-through;
}

.task-actions button {
  /* Styling for action buttons */
  margin-left: 5px;
  padding: 8px 16px; /* Adjust button padding for better spacing */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button {
  /* Styles for the Edit button */
  background-color: #42b983;
  color: white;
}

.edit-button:hover {
  /* Change background color on hover */
  background-color: #368962;
}

.delete-button {
  /* Styles for the Delete button */
  background-color: #ff6347;
  color: white;
}

.delete-button:hover {
  /* Change background color on hover */
  background-color: #cc4125;
}

.empty-list-message {
  /* Styling for the message when no tasks are available */
  font-style: italic;
  color: #777;
  text-align: center;
}

.task-summary {
  /* Styling for the task summary section */
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.task-summary p {
  /* Margin for each summary paragraph */
  margin: 5px 0;
}

.edit-input {
  /* Styling for the input field during task editing */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
</style>
