import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { garageManagerValidationSchema } from 'validationSchema/garage-managers';
import { UserInterface } from 'interfaces/user';
import { GarageInterface } from 'interfaces/garage';
import { GarageManagerInterface } from 'interfaces/garage-manager';

function GarageManagerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: GarageManagerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.garage_manager.create({ data: values as RoqTypes.garage_manager });
      resetForm();
      router.push('/garage-managers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<GarageManagerInterface>({
    initialValues: {
      manager_since: new Date(new Date().toDateString()),
      manager_until: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
      managed_garage_id: (router.query.managed_garage_id as string) ?? null,
    },
    validationSchema: garageManagerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Garage Managers',
              link: '/garage-managers',
            },
            {
              label: 'Create Garage Manager',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Garage Manager
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="manager_since" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Manager Since
            </FormLabel>
            <DatePicker
              selected={formik.values?.manager_since ? new Date(formik.values?.manager_since) : null}
              onChange={(value: Date) => formik.setFieldValue('manager_since', value)}
            />
          </FormControl>
          <FormControl id="manager_until" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Manager Until
            </FormLabel>
            <DatePicker
              selected={formik.values?.manager_until ? new Date(formik.values?.manager_until) : null}
              onChange={(value: Date) => formik.setFieldValue('manager_until', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<GarageInterface>
            formik={formik}
            name={'managed_garage_id'}
            label={'Select Garage'}
            placeholder={'Select Garage'}
            fetcher={() => roqClient.garage.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/garage-managers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'garage_manager',
    operation: AccessOperationEnum.CREATE,
  }),
)(GarageManagerCreatePage);
