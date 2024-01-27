<template>
  <pre>
    This method automatically prevents the native submission of a form at all
    times. It's typically used when you're handling form submissions via AJAX
    (asynchronous JavaScript and XML) requests. By using handleSubmit, you
    ensure that the form won't be submitted through the browser's default
    behavior, allowing you to handle the submission process manually through
    JavaScript, often by making AJAX calls.
  </pre>
  <VeeForm v-slot="{ submitForm }" :validation-schema="schema" as="div">
    <form @submit="submitForm" method="post" action="/api/users/" class="flex">
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
      <button>Submit</button>
    </form>
  </VeeForm>
</template>
<script setup>
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
</script>
