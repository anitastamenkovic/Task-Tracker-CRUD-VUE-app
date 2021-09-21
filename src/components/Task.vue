<template>
  <div
    class="container-task"
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <div>
      <h3 v-if="editing === task.id">
        <textarea
          type="text"
          rows="1"
          cols="30"
          wrap="soft"
          maxlength="40"
          v-model="task.text"
        />
      </h3>
      <h3 v-else>
        {{ task.text }}
      </h3>
      <p v-if="editing === task.id">
        <textarea
          type="text"
          rows="1"
          cols="30"
          wrap="soft"
          maxlength="40"
          v-model="task.day"
        />
      </p>
      <p v-else>{{ task.day }}</p>
    </div>

    <div class="buttons" v-if="editing === task.id">
      <button>
        <i @click="editTask(task)" class="fas fa-check edit"></i>
      </button>
      <button>
        <i @click="cancelEditing" class="fas fa-times delete"></i>
      </button>
    </div>
    <div class="buttons" v-else>
      <button>
        <i @click="editMode(task.id)" class="fas fa-pencil-alt edit"></i>
      </button>
      <button>
        <i
          @click="$emit('delete-task', task.id)"
          class="fas fa-times delete"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    editMode(id) {
      this.editing = id;
    },
    editTask(task) {
      if (task.text === "" || task.day === "") return;
      this.$emit("edit-task", task.id, task);
      this.editing = null;
    },
    cancelEditing() {
      this.editing = null;
    },
  },
};
</script>

<style scoped>
.container-task {
  display: flex;
  justify-content: space-between;
}
.task {
  background: #dee2e6;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
.task:hover {
  background-color: #ced4da;
}
.task.reminder {
  border-left: 5px solid #099268;
}
.buttons {
  display: flex;
  gap: 10px;
}
button {
  outline: none;
  border: none;
  background-color: transparent;
}
.fas {
  font-size: 16px;
}
.edit {
  color: #099268;
}
.edit:hover {
  color: #087252;
}
.delete {
  color: #e03131;
}
.delete:hover {
  color: #c92a2a;
}
textarea {
  outline: none;
  border: none;
  border-bottom: 1px solid #087252;
  background-color: transparent;
  color: #343a40;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  overflow: auto;
}
</style>
