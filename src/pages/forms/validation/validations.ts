export const validateForm = (form: any) => {
  const errors: any = {};
  if (!form.first) errors.first = "First name is required.";
  if (!form.last) errors.last = "Last name is required.";
  if (!form.username) errors.username = "Username is required.";
  if (!form.city) errors.city = "City is required.";
  if (!form.state) errors.state = "State is required.";
  if (!form.zip) errors.zip = "Zip is required.";
  if (!form.terms) errors.terms = "You must accept terms.";
  return errors;
};
