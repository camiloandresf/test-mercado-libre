import React from "react";
import {Table, Button ,Card, Container} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import {DETAIL_ITEM, BUTTON_PAY} from "../../constants/es"
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb"

const DetailItem = ({ item }) => {
    console.log(item);
    var attributes = item.attributes;
    return (

       
            <Card className="card-detail">
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <Card.Header className="card-header-detail">
                                    <Card.Img className="card-img-detail"  variant="bottom" src={item.pictures && item.pictures[0].url} />
                                </Card.Header>
                            </td>                          
                            <td>
                                <Card.Body className="card-body-detail">
                                <Card.Subtitle className="card-title-detail">
                                       {DETAIL_ITEM[item.condition]} | {item.sold_quantity} {DETAIL_ITEM.sold}
                                    </Card.Subtitle>
                                    <Card.Title className="card-text-detail">
                                        {item.title}
                                    </Card.Title>
                                    <Card.Title className="card-title-detail size-large"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Card.Title>
                                    <Button variant="contained" color="primary" className="button-pay">{BUTTON_PAY.title}</Button>
                                </Card.Body>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Card.Title className="card-title">
                                    {DETAIL_ITEM.title}
                                </Card.Title>

                            </td>                          
                        </tr>
                        <tr>
                        {attributes && attributes.map((attribute) => 
                                       
                                <Card.Text className="card-text-detail">
                                    {attribute.name}:&nbsp;  
                                    { attribute.value_name}
                                </Card.Text>
                            
                            )}
                                             
                        </tr>
                    </tbody>
                </Table>
                 
            </Card>
  
            )

}
export default DetailItem