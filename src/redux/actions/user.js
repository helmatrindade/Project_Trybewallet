export const EMAIL_USER = 'EMAIL_USER';

export const getEmail = (email) => ({
  type: EMAIL_USER,
  payload: email,
});
