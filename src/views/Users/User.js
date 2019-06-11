import * as React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
// component liste des users

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listeUsers: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:8080/users")
            .then(Response => Response.json())
            .then(data => this.setState({ listeUsers: data, loading: false }));
    }
    render() {
        const { listeUsers, loading } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Listes des users:</strong>
                            </CardHeader>
                            <CardBody>
                                
                                <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Activé</th>
                                                <th scope="col">status</th>
                                            </tr>
                                        </thead>
                                        {listeUsers.map(user => (
                                        <tbody key={user.idUser}>
                                        <tr>
                                            <td>{user.idUser}</td>
                                            <td>{user.username}</td>
                                            <td>tab role ici</td>
                                            <td>{user.activate}</td>
                                            <td>
                                                <Button color="success" className="px-4">Detail</Button>
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

export default User;