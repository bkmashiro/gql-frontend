<script setup lang="ts">
import { useUserQuery } from './gql/generated';

const { result, loading, error } = useUserQuery({
  id: 1,
});


</script>

<template>
  <div>
    {{ result }}
  </div>
</template>

<style scoped></style>
