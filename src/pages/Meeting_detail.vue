<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>Meeting Detail</h1>
    <p><strong>Client Name:</strong> {{ route.query.client_name }}</p>
    <p><strong>Title:</strong> {{ route.query.title }}</p>
    <p><strong>Date:</strong> {{ route.query.date }}</p>
    <p><strong>Time:</strong> {{ route.query.time }}</p>
    <p><strong>Description:</strong> {{ route.query.description }}</p>
    <p><strong>Location:</strong> {{ route.query.location }}</p>
  </div>
</template>

<style>
    * {
        color: black ;
        }
</style>