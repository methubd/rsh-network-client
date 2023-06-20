import Doctors from "../../components/Doctors/Doctors";
import PageTitle from "../../components/PageTitle/PageTitle";

const AllDoctors = () => {

    const backGroundImage = 'https://www.pantai.com.my/assetsrevamp/public/images/pantai-nurse-background.webp?t=a';
    
    return (
        <section>
            <div>
            <PageTitle
            subHeading="Meet our"
            heading="Qualified Doctors"
            backGroundImage={backGroundImage}
            ></PageTitle>
            </div>
            
            <Doctors></Doctors>
        </section>
    );
};

export default AllDoctors;