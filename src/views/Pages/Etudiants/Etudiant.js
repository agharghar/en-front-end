import * as React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
// component liste des etudiants

export class Etudiant extends React.Component {
constructor(props) {
        super(props);

        this.state = {
            listeEtudiants: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:8080/etudiants")
            .then(Response => Response.json())
            .then(data => this.setState({ listeEtudiants: data, isLoading: false }));
    }
    render() {
        const { listeEtudiants, isLoading } = this.state;

        if (isLoading) {
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
                                
                                <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de Naissance</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {listeEtudiants.map(etudiant => (
                                        <tbody key={etudiant.idEtudiant}>
                                        <tr>
                                            <td>{etudiant.idEtudiant}</td>
                                            <td>{etudiant.nom}</td>
                                            <td>{etudiant.prenom}</td>
                                            <td>{etudiant.dateNaissance}</td>
                                            <td>
                                                <Button block color="primary" className="mb-3 mb-xl-0">Detail</Button>
                                            </td>
                                            <td>
                                                <Button color="danger" className="px-4">Supprimer</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    ))}
                                </Table>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
