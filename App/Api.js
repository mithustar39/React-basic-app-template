export const fakeAuthApi = async (email, password) => {
  // Simulate an API call
  return email === 'user@example.com' && password === 'password';
};
