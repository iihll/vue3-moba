<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ year }}</p>
    <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup({ msg }) {
    const year = ref(2020);
    const result = computed(() => msg + "123");

    return {
      year,
      result,
    };
  },
});
</script>
