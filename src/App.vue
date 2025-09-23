<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <router-view /> <!-- page content here -->
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
}
.content {
  flex: 1;
  padding: 2rem;
  background: #f9f9f9;
  overflow-y: auto;
}
</style>
