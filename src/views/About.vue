<template>
  <h3>Version 1.0.0</h3>
  <p>
    CRUD application using Vue, Options API, Router and JSON server
  </p>
  <p>
    You can toggle Add Task for form to appear and on double click toggle
    reminder.
  </p>
  <p>Also you can edit and delete tasks.</p>
  <router-link to="/">Go Back</router-link>
</template>

<script>
export default {
  name: "About",
  inheritAttrs: false, // disable 'non-props' warning
};
</script>
