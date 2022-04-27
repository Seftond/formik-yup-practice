import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './App.css';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required')  
})

const initialValues = {
  username: "",
  email: "",
  password: ""
}

const onSubmit = values => {
  alert(`Username: ${values.username} Email: ${values.email} Password: ${values.password}`)
}

function App() {

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor='username'>Username</label>
          <Field type='text' id="username" name="username"/>
          <ErrorMessage name='username'/>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <Field type='text' id="email" name="email"/>
          <ErrorMessage name='email'/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <Field type='password' id="password" name="password"/>
          <ErrorMessage name='password'/>
        </div>
      <button type='submit'>Submit</button>
      </Form>
    </Formik>

  );
}

export default App;
