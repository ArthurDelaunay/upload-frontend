import { useState } from "react"

import { useFormik } from "formik"
import * as Yup from "yup"
import Input from "./Input"
import { signIn, pictureSignIn } from "../api/user"

const Form = () => {
  const [picture, setPicture] = useState(null)
  const handleFileChange = (e) => {
    setPicture(e.target.files[0])
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: ({ firstName, lastName, email, password }) => {
      let user = {
        firstName,
        lastName,
        email,
        password,
        picture,
      }

      const response = signIn(user)
      console.log(response)
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "First Name is too short")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(2, "Last Name is too short")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    validateOnChange: false,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="firstName"
        type="text"
        placeholder="Enter your first name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <Input
        name="lastName"
        type="text"
        placeholder="Enter your last name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder=""
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Input name="picture" type="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
