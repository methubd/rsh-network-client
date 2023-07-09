import './ManageUsers.css'
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import Loading from '../../../components/Loading/Loading';
import SingleUser from './SingleUser/SingleUser';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], isLoading: isUserLoading} = useQuery(['users'],
    async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    if(isUserLoading){
        return <Loading></Loading>
    }

    return (
        <div className='add-consultant-container'>
            <Helmet title='RSH | Manage Users'/>
            <DashboardTitle title="Manage Users"/>
            {/* <h1>User : {users.length}</h1> */}
            {
                users.map(user => <SingleUser key={user._id} user={user}/> )
            }
            
        </div>
    );
};

export default ManageUsers;