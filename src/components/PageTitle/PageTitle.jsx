import "./PageTitle.css"

const PageTitle = ({heading, subHeading, backGroundImage}) => {
    
    return (
        <div className="page-title-container container" style={{backgroundImage: `url(${backGroundImage})`}}>
            <h4 className="sub-heading">{subHeading}</h4>
            <h1 className="heading">{heading}</h1>
        </div>
    );
};

export default PageTitle;