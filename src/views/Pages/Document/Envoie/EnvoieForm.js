import React from 'react';
import { Button, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import { Formik , Field } from 'formik';
import * as Yup from 'yup'


const validationSchema = function (values) {
  return Yup.object().shape({
    titre: Yup.string()
    .min(3, `au mois 3 lettres`)
    .required('titre document obligatoire'),
    libelle_version : Yup.string()
    .min(3, `au mois 3 lettres`)
    .required('Version libellé obligatoire'),
    document : Yup.mixed()
    .required("fichier obligatoire")
  })
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









class EnvoieForm extends React.Component {
  constructor(props){
    super(props)
    this.touchAll = this.touchAll.bind(this)
    this.employeeRef = React.createRef();
    this.form = React.createRef() ; 
    this._handleChange = this._handleChange.bind(this);
  }

  initialValues = {
    titre: '',
    type: '',
    document: '',
    libelle_version: '',
    commentaire_version: '',
    employee: '',
    categorie: '' ,
    commentaire: '' ,
    document:''
  }


  
  onSubmit = (values) => {
    console.log(JSON.stringify(values))
    //console.log(values.file)
    if(this.props.parent){
      let formData = new FormData();
      formData.append("test",this.form.current)
			let xhr = new XMLHttpRequest();
		  xhr.open("POST", "/uploadFile",true);
		  xhr.send(values);
    }else{
      let formData = new FormData();
      formData.append("test",this.form.current)
			let xhr = new XMLHttpRequest();
		  xhr.open("POST", "/uploadFile",true);
		  xhr.send(values);
    }
  

}
  

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
      titre: true,
      type: true,
      document: true,
      libelle_version: true,
      commentaire_version: true,
      employee: true,
      categorie: true ,
      commentaire: true ,
      document : true ,

      }
    )
    this.validateForm(errors)
  }

  _handleChange(e){    

    if(this.props.onChangeValue(e) !== undefined){
      this.props.onChangeValue(e)
    }
       

  }

  render() {
    let style = {
      display: this.props.display
    } 
    var val =null
    if(this.props.employeeValue != undefined){
      val = {value : this.props.employeeValue}
    }else{
      //val = {value : values.employee}
    }
    console.log(validate(validationSchema))
    return (
      <div className="form">
            <Formik
              initialValues={this.initialValues}
              validate={validate(validationSchema)}
              onSubmit={this.onSubmit}
              
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
                      <Form onSubmit={handleSubmit} ref={this.form} noValidate name='simpleForm'  encType= "multipart/form-data">
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="titre">Titre</Label>
                              <Input type="text"
                                    name="titre"
                                    id="titre"
                                    placeholder="Titre"
                                    autoComplete="titre"
                                    valid={!errors.titre}
                                    invalid={touched.titre && !!errors.titre}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.titre} />
                              <FormFeedback>{errors.titre}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label for="type">Type</Label>
                              <Input type="text"
                                    name="type"
                                    id="type"
                                    placeholder="Type"
                                    autoComplete="type"
                                    valid={!errors.type}
                                    invalid={touched.type && !!errors.type}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.type} />
                              <FormFeedback>{errors.type}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label for="document">Document</Label>
                              <Input type="file"
                                    name="document"
                                    id="document"
                                    placeholder="Document"
                                    autoComplete="commentaire"
                                    valid={!errors.document}
                                    invalid={touched.document && !!errors.document}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.document} />
                              <FormFeedback>{errors.document}</FormFeedback>
                            </FormGroup>
                          </Col>

                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="libelle_version">Libellé Version</Label>
                              <Input type="text"
                                    name="libelle_version"
                                    id="libelle_version"
                                    placeholder=" Version"
                                    autoComplete="libellé"
                                    valid={!errors.libelle_version}
                                    invalid={touched.libelle_version && !!errors.libelle_version}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.libelle_version} />
                              <FormFeedback>{errors.libelle_version}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label for="commentaire_version">Commentaire Version</Label>
                              <Input type="textarea"
                                    name="commentaire_version"
                                    id="commentaire_version"
                                    placeholder="Commentaire Version"
                                    autoComplete="type"
                                    valid={!errors.type}
                                    invalid={touched.commentaire_version && !!errors.commentaire_version}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.commentaire_version} />
                              <FormFeedback>{errors.commentaire_version}</FormFeedback>
                            </FormGroup>
                          </Col>

                        </Row>
                        <Row>
                          <Col>
                            <FormGroup style={style}>
                              <Label for="employee">Employee</Label>
                              <Input type="select"
                                    name="employee"
                                    id="employee"
                                    placeholder="Employee"
                                    autoComplete="employee"
                                    valid={!errors.employee}
                                    invalid={touched.employee && !!errors.employee}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.employee} >
                                      {this.props.employees}
                                    </Input>
                              <FormFeedback>{errors.employee}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label for="categorie">Categorie</Label>


                              <Input type="select"
                                    name="categorie"
                                    id="categorie"
                                    placeholder="Categorie"
                                    autoComplete="categorie"
                                    valid={!errors.categorie}
                                    invalid={touched.categorie && !!errors.categorie}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.categorie} >
                                      {this.props.categories}
                                    </Input>

                              <FormFeedback>{errors.commentaire_version}</FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="commentaire">Commentaire</Label>
                              <Input type="textarea"
                                    name="commentaire"
                                    id="commentaire"
                                    placeholder="Commentaire"
                                    autoComplete="commentaire"
                                    valid={!errors.commentaire}
                                    invalid={touched.commentaire && !!errors.commentaire}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.commentaire} />
                              <FormFeedback>{errors.commentaire}</FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup>
                          <Button type="submit" color="primary" style={style} className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Attendez...' : 'Envoyer'}</Button>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                )} />
      </div>
    )
  }
}

export default EnvoieForm;
