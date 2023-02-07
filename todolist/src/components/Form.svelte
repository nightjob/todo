<script lang="ts">
  import axios from "axios";

  let todoItem: string;
  let when: string;
  async function submitForm() {
await axios.post("http://localhost:4200", {
  todoItem: todoItem,
  when: when,
})
};
</script>

<h2>Todo List</h2>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What needs to be done?</span>
  </label>
  <input type="text" placeholder="Enter here..." class="input input-bordered w-full max-w-xs" />
  <label class="label">
  </label>
</div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Put off this also forever</span>
  </label>
  <input type="text" placeholder="Enter here..." class="input input-bordered w-full max-w-xs" />
  <label class="label">
  </label>
</div>

<button class="btn btn-outline">Button</button>