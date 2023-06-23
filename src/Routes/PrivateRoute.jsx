import { Link, Navigate} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(user){
        return children;
    }

    // TODO: add !isAdmin security for this route;
    if(!user){
        return <div className="software-warning">
            <p> Error: You are not eligible to perform this action. It will decide hospital admin department, please contact software administration department if you are already a authorized person. <Link className="menu-item" to='/'>Home</Link> </p>
            </div>
    }

    if(loading){
        return <Loading></Loading>
    }

    return Navigate('/login')
};

export default PrivateRoute; 