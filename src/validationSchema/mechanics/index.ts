import * as yup from 'yup';

export const mechanicValidationSchema = yup.object().shape({
  specialization: yup.string().nullable(),
  experience: yup.number().integer().nullable(),
  rating: yup.number().integer().nullable(),
  availability: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
