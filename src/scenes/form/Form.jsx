import { Formik } from 'formik';
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import {Box, TextField, Button} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
}
const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    contact: yup.string().matches(phoneRegex, "Invalide Phone Number").required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})



const FormInformation= () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const notify = () => toast.success("User Sucessfully Created  ")

  const handleFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box sx={{m: "20px"}}>
      <Header title="Create User" subtitle="Create a New User Profile"/>

      <Formik
        initialValues={initialValues}
        validationSchema= {userSchema}
        onSubmit= {handleFormSubmit}
      >
        {
        ({handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
          <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gap: "30px",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  "& > div": {
                    gridColumn: isNonMobile? undefined: "span 4"
                  }
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  error={!!touched.firstName && !!errors.firstName}  
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.firstName && errors.firstName}
                  sx={{gridColumn: "span 2"}}
                >
                </TextField>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="filled"
                  value={values.lastName}
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{gridColumn: "span 2"}}
                >
                </TextField>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="filled"
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{gridColumn: "span 4"}}
                >
                </TextField>
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="contact"
                  variant="filled"
                  value={values.contact}
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{gridColumn: "span 4"}}
                >
                </TextField>
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  variant="filled"
                  value={values.address1}
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{gridColumn: "span 4"}}
                >
                </TextField>
                <TextField
                  fullWidth
                  label="Address 2"
                  name="address2"
                  variant="filled"
                  value={values.address2}
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{gridColumn: "span 4"}}
                >
                </TextField>      
            </Box>
            <Box sx={{display: "flex", justifyContent: "end", mt: "20px"}}>
              <Button onClick={notify} color="secondary" variant="contained" type="submit" sx={{ color: "#292929", fontWeight: "bold"}} >
                Create New User
              </Button>
            </Box>
            <Toaster/>
          </form>
        )
        }

      </Formik>
    </Box>
  )
}

export default FormInformation;