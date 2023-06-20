import Doctors from "../../components/Doctors/Doctors";
import PageTitle from "../../components/PageTitle/PageTitle";

const MakeAppointment = () => {
    return (
        <section>
            <div>
            <PageTitle
            subHeading="Meet our"
            heading="Qualified Doctors"
            ></PageTitle>
            </div>
            
            <Doctors></Doctors>
        </section>
    );
};

export default MakeAppointment;