import { Button, Box, TextField } from '@mui/material';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';

import UsernamesContext from '../../contexts/usernamesContext';

const QueryForm = () => {
  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors }
  } = useForm();

  const { firstUsername, secondUsername, setFirstUsername, setSecondUsername } =
    useContext(UsernamesContext);

  const onSubmit = formData => {
    setFirstUsername(formData.firstUsername);
    setSecondUsername(formData.secondUsername);
  };

  return (
    <Box className="container my-10 mx-auto max-w-xl px-5 sm:px-0">
      <form className="mt-4 rounded bg-white p-5 shadow ">
        <div className="form-group">
          <Controller
            name="firstUsername"
            control={control}
            render={({ field: { onChange, value = firstUsername } }) => (
              <TextField onChange={onChange} value={value} label="first user" />
            )}
            rules={{ required: true }}
          />
          {errors.firstUsername && <p>This field is required</p>}
        </div>
        <div className="form-group">
          <Controller
            name="secondUsername"
            control={control}
            render={({ field: { onChange, value = secondUsername } }) => (
              <TextField
                className="form-group"
                onChange={onChange}
                value={value}
                label="another user"
              />
            )}
            rules={{
              required: true,
              validate: () => {
                if (
                  getValues('firstUsername') === getValues('secondUsername')
                ) {
                  setError('duplicate', {
                    type: 'validate',
                    message:
                      'the second user cannot be the same as the first user, please choose another name'
                  });
                }

                return true;
              }
            }}
          />
        </div>

        {errors.secondUsername && <p>This field is required</p>}
        {errors.duplicate && <p>{errors.duplicate.message}</p>}

        <div className="mt-3 flex justify-end border-t pt-5">
          <Button onClick={handleSubmit(onSubmit)}>Get Followers</Button>
        </div>
      </form>
    </Box>
  );
};

export default QueryForm;
