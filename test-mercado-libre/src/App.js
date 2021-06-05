import './scss/app.scss';
import {useState} from "react";
import Routes from "./Routes/routes"
function App() {
  const  [search, setSearch] = useState(null);
  const handlerSearch = (SearchBox) => setSearch(SearchBox);
  return (
    <Routes  search={search} handlerSearch={handlerSearch} />
  );
}

export default App;
