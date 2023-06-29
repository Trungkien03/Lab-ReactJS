import React from "react";
import { Icon, Container, TextInput, Select, Textarea, Button } from "react-materialize";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: 0,
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().required("Required.").typeError("Please enter a valid number"),
      country: Yup.number().integer().typeError("Please select a country."),
      message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    }),
  });

  return (
    <>
      <Container>
        <h1>Contact us</h1>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            id="TextInput-1"
            label="Your Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
          <TextInput
            id="TextInput-2"
            label="Your Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error">{formik.errors.phone}</div>
          )}
          <TextInput
            email
            id="TextInput-3"
            label="Email"
            validate
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
          <Select
            id="Select-1"
            multiple={false}
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option disabled value="">
              Choose Your Country
            </option>
            <option value="1">Viet Nam</option>
            <option value="2">America</option>
            <option value="3">Japan</option>
          </Select>
          {formik.touched.country && formik.errors.country && (
            <div className="error">{formik.errors.country}</div>
          )}
          <Textarea
            icon={<Icon>mode_edit</Icon>}
            id="Textarea-1"
            label="Message"
            name="message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="error">{formik.errors.message}</div>
          )}
          <Button type="submit" variant="primary">Submit <Icon right>send</Icon></Button>
        </form>
      </Container>
    </>
  );
};
