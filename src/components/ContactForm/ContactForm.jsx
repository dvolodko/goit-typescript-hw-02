import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="name" />
        <Field type="text" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
