<template>
  <div class="form-container">
    <h2>Member Registration Form</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" v-model="personalInfo.firstName" id="firstName" class="form-control" />
      </div>
      <div class="form-group">
        <label for="middleName">Middle Name:</label>
        <input type="text" v-model="personalInfo.middleName" id="middleName" class="form-control" />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="personalInfo.lastName" id="lastName" class="form-control" />
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select v-model="personalInfo.gender" id="gender" class="form-control">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Personal Info:', this.personalInfo);
      this.personalInfo = {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
      };
    },
  },
};
</script>
