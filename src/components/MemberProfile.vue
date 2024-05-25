<template>
  <div class="member-profile-container">
    <h2>Member Profile</h2>
    <p>Name: {{ member.name }}</p>
    <p>Email: {{ member.email }}</p>
    <p>Phone: {{ member.phone }}</p>
    <p>Address: {{ member.address }}</p>
    <p>City: {{ member.city }}</p>
    <p>Country: {{ member.country }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        address: '123 Street Name',
        city: 'Cityville',
        country: 'Countryland',
      },
    };
  },
};
</script>
