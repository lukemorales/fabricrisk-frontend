import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  username: Yup.string()
    .required('Fill your username credentials')
    .min(4, 'Username is longer than 4 characters'),
  password: Yup.string()
    .required('You must provide a password to authenticate')
    .min(6, 'Passwords have 6 characters or more'),
});
