<template>
  <p></p>
  <Form
    :validation-schema="schema"
    @submit="onSubmit"
    v-slot="{ isSubmitting }"
    class="flex"
  >
    <label>
      Name
      <Field name="name" type="text"></Field>
    </label>
    <error-message name="name"></error-message>
    <label>
      Email
      <Field name="email" type="email"></Field>
    </label>
    <error-message name="email"></error-message>

    <label>
      Password
      <Field name="password" type="password"></Field>
    </label>
    <error-message name="password"></error-message>

    <button :disabled="isSubmitting" :class="{ submitting: isSubmitting }">
      Submit
    </button>
  </Form>
  <pre>
    sSubmitting and validate() Note that calling validate from the Form slot
    props will not cause the isSubmitting state to change, it will only change
    if either submitForm or handleSubmit are called or when a submit event is
    triggered.
  </pre>
  <pre>
    Note that there isn’t a need to have isSubmitting set back to false if
    you’ve used submitForm, as this submission method will perform a full-page
    refresh (native forms behavior).
  </pre>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().min(8).required(),
});

function onSubmit(values) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify(values, null, 2));
    }, 2000);
  });
}
</script>
