<template>
  <div class="sidebar">
    <h2>CRM Menu</h2>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/client-form">Add Client</router-link></li>
      <li><router-link to="/meetings">Meeting Detail</router-link></li>
      <li><router-link to="/appointment">Appointment</router-link></li>
      <li><router-link to="/view-customer">View Customers</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background: #2c3e50;
  color: white;
  height: 100vh;
  padding: 1rem;
}
.sidebar h2 {
  margin-bottom: 1rem;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 1rem 0;
}
.sidebar a {
  color: white;
  text-decoration: none;
}
.sidebar a.router-link-exact-active {
  font-weight: bold;
  color: #FF8D08;
}
</style>
