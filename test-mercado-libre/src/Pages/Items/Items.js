import {useEffect, useReducer} from 'react';
import {itemsReducer, initialState} from "./../../reducers/items";
import {FETCH_SUCCESS} from "./../../reducers/actions/items";
import {BASE_URL,LIMIT_ITEMS} from "./../../constants/constants";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import ListItems from './List-items';

const Items= ({ search }) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState)
    const getItems = async () => {
        try {
            const { data: items} = await axios.get(`${BASE_URL}/sites/MLA/search?q=${search}&limit=${LIMIT_ITEMS}`);

            dispatch({type: FETCH_SUCCESS, payload: {data: items.results} });

            console.log("DATA", items.results)
        } catch (error) {
            console.log("ERROR API", error)
        }
    }
    useEffect(() => {
        //peticion HTTP
        getItems();
    }, [search])


    return (
        <Container className='Container justify-content-center'>
            <ListItems items={state.items} ></ListItems>
        </Container>
    );

}
export default Items;