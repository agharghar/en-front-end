import * as React from 'react';
import * as Yup from 'yup';
import { Button, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';

const validationSchema = function (values) {
    return Yup.object().shape({
      libelle_categorie: Yup.string()
      .min(3, `Au mois 3 lettres`)
      .required('Champs Obligatoire'),
      commentaire : Yup.string()

    })
  }

  const initialValues = {
    libelle_categorie: "",
    commentaire: "" , 
  }

  const validate = (getValidationSchema) => {
    return (values) => {
      const validationSchema = getValidationSchema(values)
      try {
        validationSchema.validateSync(values, { abortEarly: false })
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

  const onSubmit = (values) => {

    /*
    let xhr = new XMLHttpRequest();
    xhr.setH
    xhr.open("POST", process.env.REACT_APP_HOST+"/categorie/add");
    xhr.send({
      libelle_categorie: values.libelle_categorie  ,
      commentaire: values.commentaire),

    });
*/
    const instance = axios.create({
      baseURL: process.env.REACT_APP_HOST , 
      method: 'POST',


    });

   
    instance.post('/categorie/add', {
      libelle_categorie: values.libelle_categorie  ,
      commentaire: values.commentaire,
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      this.props.history.push(`/erreurServeur`) ; 
    });

    
  }

class CategorieNew extends React.Component {

  
  findFirstError (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm (errors) {

    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
  }

  touchAll(setTouched, errors) {
    setTouched({
      libelle_categorie: true,
      commentaire: true , 
      }
    )
    this.validateForm(errors)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-note"></i><strong>Ajout Categorie</strong>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={initialValues}
              validate={validate(validationSchema)}
              onSubmit={onSubmit}
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
                    <Col lg="8">
                      <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                        <FormGroup>
                          <Label for="libelle_categorie">Categorie</Label>
                          <Input type="text"
                                 name="libelle_categorie"
                                 id="libelle_categorie"
                                 placeholder="Libellé Categorie"
                                 autoComplete="given-name"
                                 valid={!errors.libelle_categorie}
                                 invalid={touched.libelle_categorie && !!errors.libelle_categorie}
                                 autoFocus={true}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.libelle_categorie} />
                          <FormFeedback>{errors.libelle_categorie}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="textarea">Commentaire</Label>
                          <Input type="textarea"
                                 name="commentaire"
                                 id="commentaire"
                                 placeholder="Commentaire"
                                 autoComplete="family-name"
                                 valid={!errors.commentaire}
                                 invalid={touched.commentaire && !!errors.commentaire}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.commentaire} />
                          <FormFeedback>{errors.commentaire}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Button type="submit" color="primary" className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Attendez...' : 'Envoyer'}</Button>
                        </FormGroup>
                      </Form>
                    </Col>

                  </Row>
                )} />
          </CardBody>
        </Card>
      </div>
    )
  }


       


}


export default CategorieNew ; 