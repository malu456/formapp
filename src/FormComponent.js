import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    phoneNumber: '',
    address: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
     password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
      address: Yup.string().required('Required'),
      gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits only')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number can be at most 15 digits')
      .required('Required')
  });

  const handleSubmit = (values) => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head><title>Registration Data</title></head>
          <body style="background-color:cornsilk;">
            <h1>RegistrationForm Values</h1>
            <p><strong>Name:</strong> ${values.name}</p>
            <p><strong>Email:</strong> ${values.email}</p>
            <p><strong>Password:</strong> ${values.password}</p>
            <p><strong>Gender:</strong> ${values.gender}</p>
            <p><strong>Phone Number:</strong> ${values.phoneNumber}</p>
            <p><strong>Address:</strong> ${values.address}</p>
          </body>
        </html>
      `);
    }
  };

  return (
    <div>
        
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
            
          <div>
            <label htmlFor="name">FullName: </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email Id : </label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="gender">Gender : </label>
            <Field as="select" id="gender" name="gender">
              <option value="" label="Select gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </Field>
            <ErrorMessage name="gender" component="div" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phonenumber : </label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <div>
            <label htmlFor="address">Address : </label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;