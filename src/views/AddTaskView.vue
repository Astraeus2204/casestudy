<template>
  <div class="add-task-view">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <h2>Add Task</h2>
    <div class="form-group">
      <div class="input-wrapper">
        <input type="text" v-model="newTask" placeholder="Enter task" class="task-input">
        <button @click="addTask" class="add-button">Add Task</button>
      </div>
    </div>

    <p class="message" v-if="message">{{ message }}</p>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { taskList } from '../data/items.js';

export default {
  name: 'AddTaskView',
  components: {
    HelloWorld
  },
  data() {
    return {
      taskList: taskList,
      error:'',
      newTask: '',  
      message: ''
    };
  },
  methods: {
    incrementId() {
      taskList.id++
    },
    addTask() {
      if (this.newTask.trim() === '') {
        this.error = "Please enter a task";
      } else {
        this.error = "";
        taskList.push({ id: taskList.length + 1, text: this.newTask, completed: false });
        this.newTask = '';
        this.message = "New task added!";
      }
    },  
  },
};
</script>

<style scoped>
.add-task-view {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.input-wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.add-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #45a049;
}

.message, .error {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}

.message {
  color: #155724;
  background-color: #d4edda;
}

.error {
  color: #721c24;
  background-color: #f8d7da;
}
</style>
