import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('Access_Token');
            if(token){
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                await logOut();
                navigate('/signin');
                }
                
                return Promise.reject(error);
            }
        )
    }, [logOut, navigate])
    return [axiosSecure];
};

export default useAxiosSecure;