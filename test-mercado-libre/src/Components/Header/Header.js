import React, {useState} from "react";
import {Container, Row, Col, Form, InputGroup, Image,Table, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {BASE_LOGO} from "./../../constants/constants";
import { FaSearch } from 'react-icons/fa';

const Header = React.memo(({handlerSearch}) => {
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        const [{value}] = e.target;
        const valueTrim = value.trim();
        if (valueTrim) {
            handlerSearch(valueTrim);
            history.push(`/items?search=${valueTrim}`);
        }
    };
    return (
       <Container>
           <Row  className="headerApp">
           <Table className="table-headerApp">
                    <tbody>
                        <tr>
                            <td>
                                <Col md={5}>
                                     <Image src={BASE_LOGO} />  
                                </Col>
                            </td>                          
                            <td>
                                <Col md={5}>
                                    <Form  onSubmit={search}>
                                        <Form.Group as={Col} md="4" >
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        name="search"
                                                        placeholder="Nunca dejes de buscar"
                                                        className="search"
                                                        required
                                                    />
                                                    <Button type="sumbit" className="btn-search">
                                                        <FaSearch />
                                                    </Button>
                                                </InputGroup>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </td>
                        </tr>
                    </tbody>
                </Table>
           </Row>
       </Container>
    );

});

export default Header;