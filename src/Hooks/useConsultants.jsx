import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useConsultants = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: consultants = [], refetch, isLoading: isConsultantLoading} = useQuery(['consultants'],
    async () => {
        const res = await axiosSecure.get('/consultants')
        return res.data;
    })

    console.log();



    return [consultants, isConsultantLoading, refetch];
};

export default useConsultants;