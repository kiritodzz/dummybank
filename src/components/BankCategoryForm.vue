<template>
  <div class="form-container">
    <h2>Bank Category Form</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" id="name" class="bank-form-control" />
      </div>
      <div class="form-group">
        <label for="nameLang">Name Lang:</label>
        <input type="text" v-model="formData.nameLang" id="nameLang" class="bank-form-control" />
      </div>
      <div class="form-group">
        <label for="position">Position:</label>
        <input type="text" v-model="formData.position" id="position" class="bank-form-control" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="formData.description" id="description" class="bank-form-control"></textarea>
      </div>
      <button type="submit" class="bank-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        nameLang: '',
        position: '',
        description: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form Data:', this.formData);
      this.formData = { name: '', nameLang: '', position: '', description: '' }; // Reset the form
    },
  },
};
</script>
