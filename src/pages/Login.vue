<template>
  <div class="login-wrapper">
    <div class="background"></div>
    <div class="Login_Page">
      <h1>Login Page</h1>
      <div class="username-wrapper">
        <input type="text" id="username" name="username" v-model="username" required />
        <label for="username">Username</label>
      </div>
      <div class="password-wrapper">
        <input
          :type="show ? 'text' : 'password'"
          v-model="password"
          
          class="password-input" required
        />
        <label for="password">Password</label>
        <i
          :class="['toggle-icon', show ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye']"
          @click="show = !show"
        ></i>
      </div>
      <button class="LoginButton" @click="handleLogin">Log In</button>
    </div>
  </div>
</template>

<script setup>
import '../assets/css/login.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router' 
import { sendData } from "../api/userService";

const router = useRouter() 

const username = ref('')  
const password = ref('')
const show = ref(false)
const responseMessage = ref('')
const handleLogin = async () => {
  localStorage.setItem("user", JSON.stringify({ username: username.value }))
  router.push('/dashboard')
  const data = {
    username: username.value,
    password: password.value,
  };

  try {
    const res = await sendData(data);
    responseMessage.value = res.data.message;
  } catch (err) {
    console.error("Error:", err);
  }
};

</script>



