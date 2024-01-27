<template>
  <pre>
    Handling Invalid Submissions
     In case you want to perform some logic after a
    form fails to submit due to validation errors (e.g: focusing the first
    invalid field), you can listen for the onInvalidSubmit event emitted by the
    Form component.
  </pre>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    @invalid-submit="onInvalidSubmit"
    class="flex"
  >
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
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
function onSubmit(values) {
  // Submit values to API...
  alert(JSON.stringify(values, null, 2));
}
function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}
</script>
