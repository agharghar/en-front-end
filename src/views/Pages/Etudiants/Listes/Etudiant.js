import * as React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Link } from 'react-router-dom';

// component liste des etudiants

class Etudiant extends React.Component {
constructor(props) {
        super(props);

        this.state = {
            listeEtudiants: [],
            loading: false,
            redirect:false
        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:8080/ena/etudiants")
            .then(Response => Response.json())
            .then(data => this.setState({ listeEtudiants: data, loading: false,redirect: false }));
    }

    async remove(id) {
        await fetch(`http://localhost:8080/ena/etudiant/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedEtudiants = [...this.state.listeEtudiants].filter(i => i.id !== id);
          this.setState({listeEtudiants: updatedEtudiants,redirect:true});
        });
   // window.location.reload();
      }

    render() {
        const { listeEtudiants, loading, redirect } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Listes des Etudiants:</strong>
                            </CardHeader>
                            <CardBody>
                            <div className="float-right" id="addEtudiant">
            <                   Button color="success" tag={Link} to="/etudiant/new">Ajouter Etudiant</Button>
                            </div>    
                                <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de Naissance</th>
                                                <th>Filiere</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {listeEtudiants.map(etudiant => (
                                        
                                        <tr key={etudiant.idEtudiant}>
                                            <td>{etudiant.idEtudiant}</td>
                                            <td>{etudiant.nom}</td>
                                            <td>{etudiant.prenom}</td>
                                            <td>{etudiant.dateNaissance}</td>
                                            <td>{etudiant.filiere}</td>
                                            <td>
                                                <Button block color="primary" className="mb-3 mb-xl-0" href={"#/etudiant/" + etudiant.idEtudiant}>Edit</Button>
                                            </td>
                                            <td>
                                                <Button color="danger" className="px-4" onClick={()=>this.remove(etudiant.idEtudiant)}>Supprimer</Button>
                                            </td>
                                        </tr>
                                    
                                    ))}
                                    </tbody>
                                </Table>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Etudiant;