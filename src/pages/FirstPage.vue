<template>
  <div class="Introduction_Page">
    <h1 class="Title">Your journey starts here – log in now.</h1>
    <button class="LoginButton" @click="login">Log In</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  router.push('/login')

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');

.Introduction_Page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  background: linear-gradient(135deg, #06B6D4, #22C55E);
  justify-content: center;
  font-family: 'Nunito', sans-serif;
}

.Title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: #333;
}

.LoginButton {
  background: linear-gradient(135deg, #0284C7, #16A34A);
  border: none;
  width: 150px;
  height: 50px;
  padding: 12px 30px;
  cursor: pointer;
  color: #FFFFFF; 
}

.LoginButton:hover {
  background: linear-gradient(135deg, #0369A1, #15803D);
  transform: translateY(-0.5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
</style>
