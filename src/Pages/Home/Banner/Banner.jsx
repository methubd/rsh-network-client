import { Helmet } from "react-helmet";
import PageTitle from "../../../components/PageTitle/PageTitle";
import useAuth from "../../../Hooks/useAuth";

const Banner = () => {
    const {user} = useAuth()

    const backGroundImage = 'https://media.istockphoto.com/id/1340753878/photo/abstract-blur-hospital-clinic-medical-interior-background.jpg?s=170667a&w=0&k=20&c=52IIY2AdF1WW2ibTvV2YfGjPDFWgdyvtCc2gX3s9QeA='
    return (
        <div>
            
            <Helmet title="Home | RSH"/>

            <PageTitle
            subHeading={`Hello, ${user? user.displayName : ""}`}
            heading="Welcome to your Health Center"
            backGroundImage={backGroundImage}
            ></PageTitle>
        </div>
    );
};

export default Banner;