import './SubmitQuery.css'

const SubmitQuery = () => {

    const handleSubmitQuery = event => {
        event.preventDefault();
        console.log('Submit Query Btn Clicked');
    }
    return (

        <section className="appointment-container container">
            <div className='form-description-container'>
                <img className='company-logo' src="https://i.ibb.co/k8qL7Jf/logo.png" alt="" />
                <h1 className='form-heading'>Share <br /> Your Query <br /> with <br />Our Best Team</h1>
                <p>Within 24hrs we will answer<br />your query. <br />Don’t hesitate, contact us for <br /> better help and services</p>
            </div>
            <div className='appointment-body'>
                <form className='field-body' onSubmit={handleSubmitQuery}>
                    
                    <input className="appointment-field" type="text" name="name" placeholder='Enter Full Name'/>

                    <input className="appointment-field" type="email" name="email" placeholder='Enter email address'/>

                    <input className="appointment-field" type="text" name="department" placeholder='Subject'/>

                    <input className="appointment-field" type="number" name="number" placeholder='Contact Number'/>

                    <textarea className="appointment-field" name="message" cols="30" rows="5"></textarea>

                    <br />
                    <input className='btn-primary' type="submit" value="Submit Query" />
                </form>
            </div>

        </section>
    );
};

export default SubmitQuery;