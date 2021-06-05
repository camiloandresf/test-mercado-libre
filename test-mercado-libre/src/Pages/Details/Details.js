import {useEffect, useReducer} from 'react';
import {detailReducer, initialState} from "./../../reducers/detail";
import {FETCH_SUCCESS} from "./../../reducers/actions/items";
import {BASE_URL} from "./../../constants/constants";
import {Container} from "react-bootstrap";
import axios from "axios";
import DetailItem from './Detail-item';


const Details= props => {

    console.log(props.match.params.id);
    const [state, dispatch] = useReducer(detailReducer, initialState)
    const idItem = props.match.params.id; 
    const getItemDetail = async () => {
        try {
            const { data: item} = await axios.get(`${BASE_URL}/items/${idItem}`);

            dispatch({type: FETCH_SUCCESS, payload: {data: item} });

            console.log("DATA ITEM", item)
        } catch (error) {
            console.log("ERROR API", error)
        }
    }

    useEffect(() => {
        //peticion HTTP
        getItemDetail();
    }, [props])


    return (
        <Container className='Container'>
            <DetailItem item={state.detail} ></DetailItem>
        </Container>
    );

}
export default Details;