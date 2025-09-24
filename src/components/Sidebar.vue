<template>
  <div class="sidebar">
    <!-- Company Logo -->
    <div class="logo">
      <img src="../assets/figures/logo_vca2.png" alt="Company Logo" />
    </div>

    <!-- Menu -->
    <ul>
      <li>
        <router-link to="/dashboard">
          <i class="fas fa-tachometer-alt"></i>
          <span class="link-text">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/client-form">
          <i class="fas fa-user-plus"></i>
          <span class="link-text">Add Client</span>
        </router-link>
      </li>
      <li>
        <router-link to="/meetings">
          <i class="fas fa-handshake"></i>
          <span class="link-text">Meeting Detail</span>
        </router-link>
      </li>
      <li>
        <router-link to="/appointment">
          <i class="fas fa-calendar-alt"></i>
          <span class="link-text">Appointment</span>
        </router-link>
      </li>
      <li>
        <router-link to="/view-customer">
          <i class="fas fa-users"></i>
          <span class="link-text">View Customers</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <i class="fas fa-cog"></i>
          <span class="link-text">Settings</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 60px;
  height: 100vh;
  background: linear-gradient(135deg, #A40606, #D98324);
  color: #f5f5f5; 
  padding: 10px 0;
  margin: 0;
  border-radius: 10px;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar:hover {
  width: 230px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 0 10px;
  margin-bottom: 1rem;
}

.logo img {
  max-width: 100%;
  height: 100px;
  object-fit: contain;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  height: 50px;
  display: flex;
  align-items: center;
}

.sidebar a {
  color: #f5f5f5;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: color 0.3s, background 0.3s;
}

.sidebar i {
  min-width: 30px;
  text-align: center;
  color: #f5f5f5;
  transition: color 0.3s;
}

.sidebar a:hover,
.sidebar a:hover i {
  color: #ffd700; 
}

.link-text {
  margin-left: 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover .link-text {
  opacity: 1;
}

.sidebar a.router-link-exact-active {
  font-weight: bold;
  color: #ffd700; 
  background: rgba(0, 0, 0, 0.2);
  border-left: 4px solid #ffd700;
}
</style>
