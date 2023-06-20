import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <div className="appointment-container container">
            <h1 className="appointment-header">Make an Appointments</h1>
            <form className="appointment-body">
                
                <div className='joined-field'>
                    <input className="appointment-field" type="text" name="name" placeholder='Enter your Full Name'/>
                    <input className="appointment-field" type="email" name="email" placeholder='Email'/>
                </div>

                <div className='joined-field'>
                    <input className="appointment-field" type="date" name="date"/>
                    <input className="appointment-field" type="text" name="department" placeholder='Which department would you like to contact?'/>
                </div>
                <input className="appointment-field" type="number" name="number" placeholder='Contact Number'/>
                <textarea className="appointment-field" name="message" cols="30" rows="10"></textarea>
                <br />
                <input className='btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MakeAppointment;