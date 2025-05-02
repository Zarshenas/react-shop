const signUpValidator = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "وارد کردن نام الزامی است";
  } else if (values.firstName.length > 15) {
    errors.firstName = "نام باید حداکثر ۱۵ کاراکتر باشد";
  } else if (/\d/g.test(values.firstName)) {
    errors.firstName = "استفاده از عدد مجاز نیست";
  }

  if (!values.lastName) {
    errors.lastName = "وارد کردن نام خانوادگی الزامی است";
  } else if (values.lastName.length > 20) {
    errors.lastName = "نام خانوادگی باید حداکثر ۲۰ کاراکتر باشد";
  } else if (/\d/g.test(values.lastName)) {
    errors.lastName = "استفاده از عدد مجاز نیست";
  }

  if (!values.email) {
    errors.email = "وارد کردن ایمیل الزامی است";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل نامعتبر است";
  }

  if (!values.password) {
    errors.password = "وارد کردن رمز عبور الزامی است";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";
  }
  return errors;
};

const loginValidator = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "وارد کردن ایمیل الزامی است";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل نامعتبر است";
  }

  if (!values.password) {
    errors.password = "وارد کردن رمز عبور الزامی است";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";
  }
  return errors;
};

const updateInfo = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "وارد کردن نام الزامی است";
  } else if (values.firstName.length > 15) {
    errors.firstName = "نام باید حداکثر ۱۵ کاراکتر باشد";
  } else if (/\d/g.test(values.firstName)) {
    errors.firstName = "استفاده از عدد مجاز نیست";
  }

  if (!values.lastName) {
    errors.lastName = "وارد کردن نام خانوادگی الزامی است";
  } else if (values.lastName.length > 20) {
    errors.lastName = "نام خانوادگی باید حداکثر ۲۰ کاراکتر باشد";
  } else if (/\d/g.test(values.lastName)) {
    errors.lastName = "استفاده از عدد مجاز نیست";
  }

  if (!values.email) {
    errors.email = "وارد کردن ایمیل الزامی است";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل نامعتبر است";
  }

  return errors;
};

const updatePassword = (values) => {
  const errors = {};

  if (!values.currentPassword) {
    errors.currentPassword = "وارد کردن رمز عبور فعلی الزامی است";
  } else if (values.currentPassword.length < 8) {
    errors.currentPassword = "رمز عبور باید حداقل ۸ کاراکتر باشد";
  }

  if (!values.newPassword) {
    errors.newPassword = "وارد کردن رمز عبور جدید الزامی است";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "رمز عبور جدید باید حداقل ۸ کاراکتر باشد";
  } else if (values.newPassword === values.password) {
    errors.newPassword = "رمز عبور جدید نباید با رمز فعلی یکسان باشد";
  }

  return errors;
};

export { signUpValidator, loginValidator, updateInfo, updatePassword };
