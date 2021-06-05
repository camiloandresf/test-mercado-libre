import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Breadcrumbs = ({history}) => {

        return (
            <Container className="bread-crumb">
                <label>| </label>
                <label>{history[0] && history[0].category_id}</label>
            </Container>
        );
    
    };

export default Breadcrumbs;