import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, FormFeedback, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import '../Etudiants/ValidationForms/ValidationForms.css';
import UserDataServices from '../../../api/users/UserDataServices';

const validationSchema = function (values) {
  return Yup.object().shape({
    userName: Yup.string()
      .min(5, `Username has to be at least 5 characters`)
      .required('Username is required'),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password (min 6) doit contenir: nombre,lettre majuscule et minuscule\n')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([values.password], 'Passwords must match')
      .required('Password confirmation is required'),
    accept: Yup.bool()
      .required('* required')
      .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, {
        abortEarly: false
      })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}
const initialValues = {
  username: "",
  password: "",
  confirmPassword: ""
}
/* 
const onSubmit = (values, {
  setSubmitting,
  setErrors,
  
}) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
} */
class Register extends Component {
    constructor(props) {
      super(props)

      this.state = {
        username: {
          value: ''
        },
        password: {
          value: ''
        }
      }

      this.onSubmit = this.onSubmit.bind(this)
      this.touchAll = this.touchAll.bind(this)

    }
    findFirstError(formName, hasError) {
      const form = document.forms[formName]
      for (let i = 0; i < form.length; i++) {
        if (hasError(form[i].name)) {
          form[i].focus()
          break
        }
      }
    }

    validateForm(errors) {
      this.findFirstError('simpleForm', (fieldName) => {
        return Boolean(errors[fieldName])
      })
    }

    touchAll(setTouched, errors) {
      setTouched({
        userName: true,
        password: true,
        confirmPassword: true
      })
      this.validateForm(errors)
    }
     onSubmit(values) {
      // let username = AuthenticationService.getLoggedInUserName()

      let user = {
        username: values.username,
        password: values.password
      }
        UserDataServices.createUser(user)
          .then(() => this.props.history.push('/users'))

      console.log(values);
    } 


  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Formik
              initialValues={initialValues}
              validate={validate(validationSchema)}
              render={
                ({
                  values,
                  errors,
                  touched,
                  status,
                  dirty,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  handleReset,
                  setTouched
                }) => (
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                    <h1>Nouveau Utilisateur</h1>
                    <p className="text-muted">Creer un nouveau utilisateur</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      < Input 
                              type="text"
                              name="userName"
                              id="userName"
                              placeholder="User Name"
                              autoComplete="username"
                              valid={!errors.userName}
                              invalid={touched.userName && !!errors.userName}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.userName}
                      />
                      <FormFeedback>{errors.userName}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                              autoComplete="new-password"
                              valid={!errors.password}
                              invalid={touched.password && !!errors.password}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                      />
                      <FormFeedback>{errors.password}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              placeholder="Confirm password"
                              autoComplete="new-password"
                              valid={!errors.confirmPassword}
                              invalid={touched.confirmPassword && !!errors.confirmPassword}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmPassword}
                      />
                       <FormFeedback>{errors.confirmPassword}</FormFeedback>
                    </InputGroup>
                    <Button color="success" block type="submit" className="mr-1" >Enregistrer</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          )} />
        </Container>
      </div>
    );
  }
}

export default Register;
