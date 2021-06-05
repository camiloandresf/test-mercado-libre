import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchBox from "./../Pages/SearchBox"
import Header from "./../Components/Header"
import Items from "../Pages/Items"
import Details from "../Pages/Details"

const Routes = ({handlerSearch, search}) => {
    return(
        <Router>
        <Header handlerSearch={handlerSearch} />
        <Switch>
            <Route exact path="/" component={SearchBox} />

            <Route exact path="/items">
                <Items search={search} />
            </Route>

            <Route exact path="/items/:id" component={Details}>

            </Route>
        </Switch>
    </Router>
    );
};

export default Routes