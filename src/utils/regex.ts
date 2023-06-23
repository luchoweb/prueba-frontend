export const emailValidation = (email: string) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}/,
    "gm"
  );
  return emailRegex.test(email);
};
