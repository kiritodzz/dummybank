<template>
  <div class="container">
    <h2>Bank Category List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Name Lang</th>
          <th>Position</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.name }}</td>
          <td>{{ category.nameLang }}</td>
          <td>{{ category.position }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'Savings', nameLang: 'संचय', position: '1', description: 'Savings Account' },
        { id: 2, name: 'Checking', nameLang: 'खातारी', position: '2', description: 'Checking Account' },
        { id: 3, name: 'Investment', nameLang: 'लगानी', position: '3', description: 'Investment Account' },
      ],
    };
  },
};
</script>
