import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBookedAppointments = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: appointments = [], isLoading: isAppointmentsLoading, refetch} = useQuery(['appointments'], 
    async () => {
        const res = await axiosSecure.get(`/appointments/${user?.email}`)
        return res.data;
    }
    
    )


    return [appointments, isAppointmentsLoading, refetch]
};

export default useBookedAppointments;