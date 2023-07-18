import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useDoctor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isDoctor = {}, isLoading: isDoctorLoading} = useQuery(['isDoctor', user?.email], 
    async () => {
        const res = await axiosSecure.get(`/users/doctor/${user?.email}`);
        return res.data;
    })

    return [isDoctor, isDoctorLoading]
};

export default useDoctor;