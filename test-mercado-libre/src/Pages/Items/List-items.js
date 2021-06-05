import React from "react";
import {Table, Card, CardGroup} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb"
const ListItems = ({ items }) => {
    console.log(items);
    return (
    <CardGroup>
            <Breadcrumb history={items}  ></Breadcrumb>
            {items.map(item => {
            return (
            <Card key={item.id} className="card">
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <Card.Header className="card-header">
                                    <Card.Img className="card-img"  variant="bottom" src={item.thumbnail} />
                                </Card.Header>
                            </td>                          
                            <td>
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Card.Title>
                                    <Link className="card-text"
                                    to={{
                                        //Pasamos el id como parametro.
                                        pathname: `/items/${item.id}`,
                                        state: { id: item.id }
                                      }}
                                    >{item.title}</Link>
                                </Card.Body>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                 
            </Card>
            )
            })}
    </CardGroup>

    )
}
export default ListItems