const signUpValidator = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }else if(/\d/g.test(values.firstName)){
    errors.firstName = "Numbers are not allowed"
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }else if(/\d/g.test(values.lastName)){
    errors.lastName = "Numbers are not allowed"
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }
  return errors;
};

const loginValidator = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }
  return errors;
};

const updateInfo = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }else if(/\d/g.test(values.firstName)){
    errors.firstName = "Numbers are not allowed"
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }else if(/\d/g.test(values.lastName)){
    errors.lastName = "Numbers are not allowed"
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
const updatePassword = (values) => {
  const errors = {};

  if (!values.currentPassword) {
    errors.currentPassword = "Required";
  } else if (values.currentPassword.length < 8) {
    errors.currentPassword = "Must be 8 characters or more";
  }

  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Must be 8 characters or more";
  }else if(values.newPassword === values.password){
    errors.newPassword = "The current password and new password can't be the same"
  }

  return errors;
}

export { signUpValidator, loginValidator , updateInfo ,updatePassword };
