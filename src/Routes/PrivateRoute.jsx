import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }    

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute; 