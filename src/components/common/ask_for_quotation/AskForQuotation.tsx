import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import styles from './AskForQuotation.module.scss';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { countries } from '../../../utils/Constans';

type Inputs = {
  order_quantity: string;
  additional_information: string;
  email: string;
  re_enter_email: string;
  company_name: string;
  your_name: string;
  country: string | null;
  checked: boolean;
};

export default function AskForQuotation({ product }: any) {
  const defaultCountry = countries.includes('United Arab Emirates')
    ? 'United Arab Emirates'
    : countries[0] || null;

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      order_quantity: product.id.toString(),
      additional_information: '',
      email: '',
      re_enter_email: '',
      company_name: '',
      your_name: '',
      country: defaultCountry,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('Данные формы:', data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box className={styles.formContainer}>
        <h1>Ask for Quotation</h1>
        <Box className={styles.formControlGroup_1}>
          <TextField
            className={styles.textField}
            id="order-quantity-input"
            label="Order Quantity"
            error={!!errors.order_quantity}
            {...register('order_quantity', { required: true })}
          />
          <div className={styles.textInTextField}>Unit</div>
        </Box>
        <Box className={styles.formControlGroup}>
          <TextField
            fullWidth
            className={styles.textField}
            rows={4}
            multiline
            error={!!errors.additional_information}
            id="additional-info-textarea"
            label="Additional Information "
            placeholder="Details you would like to include."
            {...register('additional_information', { required: true })}
          />
        </Box>
      </Box>

      <Box className={styles.formContainer}>
        <h2>Your Company Information</h2>
        <Box className={styles.formControlGroup}>
          <TextField
            fullWidth
            className={styles.textField}
            id="email"
            label="Email Address"
            error={!!errors.email}
            {...register('email', { required: true })}
          />
        </Box>
        <Box className={styles.formControlGroup}>
          <TextField
            fullWidth
            className={styles.textField}
            id="re-enter-email"
            label="Re-Enter Email Address"
            error={!!errors.re_enter_email}
            {...register('re_enter_email', { required: true })}
          />
        </Box>
        <Box className={styles.formControlGroup}>
          <TextField
            fullWidth
            className={styles.textField}
            id="company-name"
            label="Company Name"
            error={!!errors.company_name}
            {...register('company_name', { required: true })}
          />
        </Box>
        <Box className={styles.formControlGroup}>
          <TextField
            fullWidth
            className={styles.textField}
            id="your-name"
            label="Your Name"
            error={!!errors.your_name}
            {...register('your_name', { required: true })}
          />
        </Box>

        <Controller
          name="country"
          control={control}
          rules={{ required: 'Пожалуйста, выберите страну' }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={countries}
              value={field.value}
              onChange={(_event, newValue) => field.onChange(newValue)}
              isOptionEqualToValue={(option, value) => option === value}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Country"
                  error={!!errors.country}
                  helperText={errors.country && errors.country.message}
                />
              )}
              sx={{ width: '100%' }}
            />
          )}
        />

        <Box className={styles.formControlGroup_2}>
          <Checkbox
            {...register('checked')}
            className={styles.checkbox}
            {...label}
          />
          <div className={styles.span}>
            An account will be created for you and by continuing, you understand
            that our services are for business purpose only and you understand
            and agree to our{' '}
            <Link className={styles.link} to="/terms-of-service">
              Terms of Service.
            </Link>
          </div>
        </Box>
      </Box>
      <Box className={styles.buttonContainer}>
        <Button type="submit">Send Enquiry</Button>
      </Box>
    </form>
  );
}
