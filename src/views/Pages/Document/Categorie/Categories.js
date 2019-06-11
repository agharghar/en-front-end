import * as React from 'react';
import * as Yup from 'yup';
import { Button, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const validationSchema = function (values) {
    return Yup.object().shape({
      firstName: Yup.string()
      .min(2, `First name has to be at least 2 characters`)
      .required('First name is required'),
      lastName: Yup.string()
      .min(1, `Last name has to be at least 1 character`)
      .required('Last name is required'),
      userName: Yup.string()
      .min(5, `Username has to be at least 5 characters`)
      .required('Username is required'),

    })
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: false
  }


class Categories extends React.Component {




    render() {

        return (
            <div className="animated fadeIn">
                 <Card>
                    <CardHeader>
                        <i className="fa fa-th"></i><strong>Categories</strong>
                        <div className="float-right" id="btnNewCat">
                        <Button color="success" tag={Link} to="/document/categories/new">Ajouter Categorie</Button>
                        </div>   
                    </CardHeader>
                    <CardBody>
                        <Formik
                        initialValues={initialValues}
                     
                        
                        >


                        </Formik>

                    </CardBody>
                </Card>
            </div>


        )
    }


}


export default Categories ; 