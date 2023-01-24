import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  imgurl: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    job: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    about: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});