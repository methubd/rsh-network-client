import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin = {}} = useQuery(['isAdmin', user?.email], 
    async () => {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        return res.data;
    }
    )
    
    return [isAdmin];
};

export default useAdmin;