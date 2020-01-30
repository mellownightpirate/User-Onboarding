import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';


export default function userForm(props) {
 
    function submitHandler(values, actions) {
      console.log(values, actions);
// Sending our form data to server
      axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        props.setUser(res);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log('Axios request finished.');
      });
    }
    
  return (
    <div className="newUsers">
      <Formik
        onSubmit={submitHandler}
        initialValues={initialFormValues}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="newUser_name">Username</label>
          <Field
            type="text"
            id="newUser_username"
            name="username"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="username" component="div" className="error"/>
          <label htmlFor="newUser_password">Password</label>
          <Field
            type="password"
            id="newUser_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          <label htmlFor="newUser_terms">Agree to Terms of Service</label>
          <Field
            type="checkbox"
            id="newUser_terms"
            name="terms"
          />
          <ErrorMessage name="newUser_terms" component="div" className="error"/>
         
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().min(9).required('Please enter a password'),
  newUser_terms: Yup.boolean().oneOf([true], "You must agree to our Terms and Services to continue")
});

// Clearing the values in our form inputs
const initialFormValues = {
  username: '',
  password: '',
  newUser_terms: false
}
