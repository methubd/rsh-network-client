import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './ManageConsultant.css'
import Loading from '../../../components/Loading/Loading';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageConsultant = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: consultants = [], refetch, isLoading: isConsultantLoading} = useQuery(['consultants'],
    async () => {
        const res = await axiosSecure.get('/consultants')
        return res.data;
    })

    if(isConsultantLoading){
        return <Loading></Loading>
    }

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/consultants/${id}`)
                .then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    refetch();
                })

            }
          })
    }   
    
    
    return (
        <div className='add-consultant-container'>
            <Helmet title='RSH | Manage Consultant'/>
            <DashboardTitle title="Manage Consultant"/>
        {            
            consultants.map(consultant => <div 
            key={consultant._id} className='single-user-container'>
            <p className='user-data-field'>{consultant?.name}</p>
            <button className='action-button'>Inactive</button>
            <button onClick={() => handleDelete (consultant._id)} className='action-button delete-btn'>Delete</button>
            </div>
        )
        }
        
        </div>
    );
};

export default ManageConsultant;