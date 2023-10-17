import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  business_name: yup.string().nullable(),
  business_address: yup.string().nullable(),
  business_city: yup.string().nullable(),
  business_state: yup.string().nullable(),
  business_zip_code: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
