<template>
  <div class="container">
    <h2>Member Information List</h2>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Other Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.firstName }}</td>
          <td>{{ member.middleName }}</td>
          <td>{{ member.lastName }}</td>
          <td>{{ member.gender }}</td>
          <td>{{ member.otherInfo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { id: 1, firstName: 'John', middleName: 'A.', lastName: 'Doe', gender: 'Male', otherInfo: 'Details here' },
        { id: 2, firstName: 'Jane', middleName: 'B.', lastName: 'Smith', gender: 'Female', otherInfo: 'Details here' },
        { id: 3, firstName: 'Sam', middleName: 'C.', lastName: 'Brown', gender: 'Other', otherInfo: 'Details here' },
      ],
    };
  },
};
</script>
