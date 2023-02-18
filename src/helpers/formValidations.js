export const formValidations = (form) => {
  let errors = {};

  const regExDetails = /^.{1,255}$/;

  if (!form.details.trim()) {
    errors.details = "This field is required.";
  } else if (!regExDetails.test(form.details.trim())) {
    errors.details = "This only accepts 255 characters.";
  }

  if (!form.events) {
    errors.events = "This field is required and only accepts numbers.";
  } else if (Number(form.events) < 1 || Number(form.events) > 10000) {
    errors.events = "This field only accepts numbers from 1 to 10000";
  }

  return errors;
};
