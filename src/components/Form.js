import { useFormik } from "formik"
import Input from "./Input"

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      picture: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="first name"
        type="text"
        placeholder="Enter your first name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <Input
        name="last name"
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
      <Input
        name="picture"
        type="file"
        placeholder=""
        value={formik.values.picture}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
