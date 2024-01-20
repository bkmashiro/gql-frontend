<script setup lang="ts">
import { onMounted, ref, watch, type Ref, withCtx } from 'vue';
import { useUserQuery, useCreateUserMutation, useUserLazyQuery } from './gql/generated';
import { provideApolloClient, useApolloClient } from '@vue/apollo-composable';

// onMounted(async () => {

const createUser = await makeMutatePromise(useCreateUserMutation({
  variables: {
    createUserInput: {
      email: 'a@yuzhes.com',
      password: 'asd',
      username: '12332'
    }
  },
}))

console.log(createUser.data?.createUser);

const queryUser = await makeQueryPromise(useUserQuery({
  id: 3
}))

console.log(queryUser.data.user);

function makeMutatePromise<T>({ mutate, onDone }: {
  mutate: () => void,
  onDone: (cb: (data: T) => void) => void
}) {
  mutate();
  return new Promise<T>((resolve, reject) => {
    onDone((data) => {
      resolve(data as T);
    });
  });
}

function makeQueryPromise<T>({ onResult }: {
  onResult: (cb: (data: T) => void) => void
}) {
  // this is immediately called
  return new Promise<T>((resolve, reject) => {
    onResult((data) => {
      resolve(data as T);
    });
  });
}

function linkRef(ref: Ref<any>, anotherRef: Ref<any>) {
  watch(anotherRef, (value) => {
    ref.value = value;
  }, {
    immediate: true
  })
}

const res = ref({});

</script>

<template>
  <div>
    {{ res }}
  </div>
</template>

<style scoped></style>
