<template>
  <div class="task-list-container">
    <h1>Task List</h1>

    <div class="task-list-wrapper">
      <ul class="task-list">
        <li v-for="task in taskList" :key="task.id" class="task-item">
          <div class="task-details">
            <input type="checkbox" v-model="task.completed" class="task-checkbox">
            <span v-if="editedTask !== task.id" :class="{ completed: task.completed }">{{ task.text }}</span>
            <input v-else type="text" v-model="task.text" class="edit-input">
          </div>
          <div class="task-actions">
            <button @click="editTask(task)" class="edit-button">{{ editedTask !== task.id ? 'Edit' : 'Save' }}</button>
            <button @click="deleteTask(task)" class="delete-button">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="taskList.length === 0" class="empty-list-message">
      No tasks available
    </div>
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
      taskList: taskList,
      editedTask: null
    };
  },
  methods: {
    deleteTask(task) {
      const index = this.taskList.findIndex(t => t.id === task.id);
      this.taskList.splice(index, 1);
    },
    editTask(task) {
      if (this.editedTask === task.id) {
        this.editedTask = null;
      } else {
        this.editedTask = task.id;
      }
    }
  },
  computed: {
    totalTasks() {
      return this.taskList.length;
    },
    completedTasks() {
      return this.taskList.filter(task => task.completed).length;
    },
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
.task-list-container {
  max-width: 800px;
  margin: 0 auto;
}

.task-list-wrapper {
  border: 1px solid #ddd; /* Add border with a lighter color */
  border-radius: 5px;
  padding: 20px; /* Add padding for spacing */
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-details {
  display: flex;
  align-items: center;
}

.task-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
}

.task-actions button {
  margin-left: 5px;
  padding: 8px 16px; /* Adjust button padding for better spacing */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button {
  background-color: #42b983;
  color: white;
}

.edit-button:hover {
  background-color: #368962;
}

.delete-button {
  background-color: #ff6347;
  color: white;
}

.delete-button:hover {
  background-color: #cc4125;
}

.empty-list-message {
  font-style: italic;
  color: #777;
  text-align: center;
}

.task-summary {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.task-summary p {
  margin: 5px 0;
}

.edit-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
</style>
