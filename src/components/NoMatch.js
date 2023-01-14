import { useLocation } from "react-router-dom";
const NoMatch = () => {
    let location = useLocation();
    return <p>Nie znaleziono elementu: {location.pathname} </p>;
}
export default NoMatch;
