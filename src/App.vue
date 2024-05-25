<template>
  <div id="app">
    <nav>
      <button @click="toggleNav" class="nav-toggle">
        ☰
      </button>
      <div :class="{'nav-links': true, 'nav-active': isNavActive}">
        <router-link to="/bank-category-form">Bank Category Form</router-link>
        <router-link to="/bank-category-list">Bank Category List</router-link>
        <router-link to="/member-registration-form">Member Registration Form</router-link>
        <router-link to="/member-info-list">Member Info List</router-link>
        <router-link to="/member-profile">Member Profile</router-link>
      </div>
      <div class="nav-right">
        <p>{{ currentTime }}</p>
        <router-link to="/signup" class="auth-link">Sign Up</router-link>
        <router-link to="/login" class="auth-link">Login</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isNavActive: false,
      currentTime: this.getCurrentTime(),
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  position: relative;
}

.nav-toggle {
  display: none;
  font-size: 24px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-links {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: #555;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-right p {
  color: #fff;
  margin-right: 20px;
}

.auth-link {
  color: #ffc107;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.auth-link:hover {
  background-color: #6c757d;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
  }

  .nav-active {
    display: flex;
  }

  .nav-links a {
    padding: 10px;
    border-top: 1px solid #444;
  }
}
</style>
