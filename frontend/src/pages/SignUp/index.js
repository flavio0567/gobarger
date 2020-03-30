import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('email format not valid')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'password min 6 chars')
    .required('password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="name" />
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="password" />

        <button type="submit">Create account</button>
        <Link to="/">Back to login</Link>
      </Form>
    </>
  );
}
