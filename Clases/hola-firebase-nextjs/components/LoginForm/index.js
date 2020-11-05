import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styles'
import { useAuth } from 'lib/useUser';

const LoginForm = () => {
    const [message, setMessage] = useState('');
    const auth = useAuth();

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={
                    async (values, { setSubmitting }) => {
                        try {
                            auth.login(values)
                            setSubmitting(false);
                            //setMessage(`${data.message} - ${data.name}`)
                        } catch (error) {
                            if (error.response) {
                                /*
                                 * The request was made and the server responded with a
                                 * status code that falls out of the range of 2xx
                                 */
                                //Si firebase devuelve un error
                                console.log(error);
                                setMessage(`Error: ${error.response.data.error} (${error.response.data.code})`)
                            } else if (error.request) {
                                /*
                                 * The request was made but no response was received, `error.request`
                                 * is an instance of XMLHttpRequest in the browser and an instance
                                 * of http.ClientRequest in Node.js
                                 */
                                console.log(error.request);
                            } else {
                                // Something happened in setting up the request and triggered an Error
                                console.log('Error', error.message);
                            }
                            console.log(error);
                        }
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input_row">
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <p className="error_message">{message}</p>
        </Container>
    )
}

export default LoginForm;