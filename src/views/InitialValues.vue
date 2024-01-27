<template>
  <Form :validation-schema="schema" :initial-values="formValues" class="flex">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button type="Submit">Submit</button>
  </Form>
  <p>
    ------------------------------initialErrors---------------------------------------------------
  </p>
  <pre>
    TIP initialErrors are applied once the Form component is mounted and is
    ignored after, so any changes to the initialErrors props won’t affect the
    messages.
  </pre>
  <Form :initial-errors="initialErrors" class="flex">
    <Field name="email" />
    <ErrorMessage name="email" />
    <Field name="password" />
    <ErrorMessage name="password" />
    <button>Submit</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
// Initial values
const formValues = {
  email: 'example@example.com',
  password: 'P@$$w0Rd',
};

const initialErrors = {
  email: 'This email is already taken',
  password: 'The password is too short',
};
</script>
