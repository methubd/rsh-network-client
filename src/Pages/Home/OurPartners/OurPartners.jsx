import Marquee from "react-fast-marquee";
import './OurPartners.css'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurPartners = () => {
    return (
        <div className="container">

            <SectionTitle
            heading="Corporate Partners"
            />
            
            <Marquee>
                <div className="partners-container">

                    <div className="partner">
                        <img className="partner-logo" src="https://cdms.police.gov.bd/cdms/r/cdmsbase/files/static/v7Y/police-logo.png" alt="" />
                    </div>

                    <div className="partner">
                        <img className="partner-logo" src="https://static.youthop.com/uploads/sites/2/2021/08/aarong-logo.jpg" alt="" />
                    </div>

                    <div className="partner">
                        <img className="partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg/1200px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg.png" alt="" />
                    </div>

                    <div className="partner">
                        <img className="partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Grameenphone_Logo_GP_Logo.svg/800px-Grameenphone_Logo_GP_Logo.svg.png" alt="" />
                    </div>
                    
                </div>

            </Marquee>
        </div>
    );
};

export default OurPartners;