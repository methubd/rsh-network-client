import "./PageTitle.css"

const PageTitle = ({heading, subHeading}) => {
    return (
        <div className="page-title-container">
            <h4 className="sub-heading">{subHeading}</h4>
            <h1 className="heading">{heading}</h1>
        </div>
    );
};

export default PageTitle;