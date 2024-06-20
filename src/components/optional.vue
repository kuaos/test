<template>
  <div class="optional">
    <div class="optional-item">back to top</div>
    <div class="optional-item">back to top</div>
    <div class="optional-item">back to top</div>
  </div>
</template>
<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.optional {
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .optional-item {
    height: 0.2rem;
    width: 100%;
  }
}
</style>
