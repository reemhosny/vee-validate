<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <h2>Basic Form</h2>
  <Form :validation-schema="schema" @submit="onSubmit" class="form flex">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <Field name="name" />
    <ErrorMessage name="name" />

    <button>Submit</button>
  </Form>
</template>

<style></style>
