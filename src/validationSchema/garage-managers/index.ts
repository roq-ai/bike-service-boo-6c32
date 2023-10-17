import * as yup from 'yup';

export const garageManagerValidationSchema = yup.object().shape({
  manager_since: yup.date().nullable(),
  manager_until: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  managed_garage_id: yup.string().nullable().required(),
});
