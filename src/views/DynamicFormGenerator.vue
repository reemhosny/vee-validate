<script setup>
import BaseDropdown from '../components/BaseDropdown.vue';
import BaseInput from '../components/BaseInput.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { shallowRef } from 'vue';
import * as Yup from 'yup';

const schema = shallowRef({
  fields: [
    {
      label: 'First Name',
      name: 'first_name',
      as: BaseInput,
      rules: Yup.string().required(),
    },
    {
      label: 'Second Name',
      name: 'second_name',
      as: BaseInput,
      rules: Yup.string().required(),
    },
    {
      label: 'Your options',
      name: 'option',
      as: BaseDropdown,
      rules: Yup.string().required(),
      options: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' },
      ],
    },
  ],
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <Form @submit="onSubmit">
    <div v-for="{ as, name, label, ...attrs } in schema.fields" :key="name">
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs"> </Field>
      <ErrorMessage :name="name" />
    </div>
    <button type="submit">Submit</button>
  </Form>
</template>

<style></style>
