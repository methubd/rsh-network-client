import { Navigate, useNavigate} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const navigate = useNavigate();

    if(user){
        return children;
    }

    // TODO: add !isAdmin security for this route;
    if(!user){

        navigate('/')

        Swal.fire({
            title: 'Would you like to login?',
            text: "You have to login to make this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Login!'
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/signin')

            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            
            }
          })

        return 
    }

    if(loading){
        return <Loading></Loading>
    }

    return Navigate('/signin')
};

export default PrivateRoute; 