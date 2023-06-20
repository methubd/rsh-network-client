import { Helmet } from "react-helmet";
import PageTitle from "../../../components/PageTitle/PageTitle";


const Banner = () => {
    const backGroundImage = 'https://media.istockphoto.com/id/1340753878/photo/abstract-blur-hospital-clinic-medical-interior-background.jpg?s=170667a&w=0&k=20&c=52IIY2AdF1WW2ibTvV2YfGjPDFWgdyvtCc2gX3s9QeA='
    return (
        <div>
            
            <Helmet title="Home | RSH"/>

            <PageTitle
            subHeading="Evening..."
            heading="Welcome to your Health Center"
            backGroundImage={backGroundImage}
            ></PageTitle>
        </div>
    );
};

export default Banner;