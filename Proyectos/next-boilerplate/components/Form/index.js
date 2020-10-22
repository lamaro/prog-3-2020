// Render Prop
import React, {useState} from 'react';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => {
    const [message, setMessage] = useState('');
    return (
    <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                //llamada a la api
                try {
                    const response = await axios.post('http://localhost:3000/api/login',
                        {
                            values
                        }
                    );
                    const data = response.data
                    console.log('Console Log Frontened', data)
                    resetForm({})
                    setMessage(`${data.message} ${data.email}`)
                } catch (error) {
                    console.error('este es mi error', error);
                }

            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
            <p>{message}</p>
    </div>
);}

export default Basic;