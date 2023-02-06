import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: "",
};
const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Please enter valid email!"),
  phone: yup.number().required("Phone is required!").positive().integer(),
  address1: yup.string().required("Address line one is required!"),
  address2: yup.string(),
});

const ProfileForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="create user" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: !errors.firstName
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: !errors.firstName
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: !errors.lastName
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: !errors.lastName
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: !errors.email
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: !errors.email
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{
                  gridColumn: "span 2",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: !errors.phone
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: !errors.phone
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Address Line One"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: !errors.address1
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: !errors.address1
                        ? `${colors.blueAccent[500]}!important`
                        : `${colors.redAccent[500]}!important`,
                    },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Address Line Two"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: `${colors.blueAccent[500]}!important`,
                    },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.2rem",
                  },
                  "& .css-wied2b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: `${colors.blueAccent[500]}!important`,
                    },
                }}
              />
            </Box>
            <Box mt="20px">
              <Button type="submit" color="info" variant="contained">Create New User</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfileForm;
