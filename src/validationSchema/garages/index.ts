import * as yup from 'yup';

export const garageValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  closing_hours: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
