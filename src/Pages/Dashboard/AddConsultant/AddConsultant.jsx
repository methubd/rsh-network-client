import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './AddConsultant.css'

const AddConsultant = () => {
    return (
        <div className='add-consultant-container '>
            
            <DashboardTitle title="Add a Consultant"/>

            <form className='add-doctor-body'>
                <input className='add-doctor-field' type="text" name="name" placeholder='Doctor Name'/>
            </form>

        </div>
    );
};

export default AddConsultant;