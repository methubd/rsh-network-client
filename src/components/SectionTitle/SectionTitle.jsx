import './SectionTitle.css'

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="section-heading-container">
            <h1 className='section-heading'>{heading}</h1>
            <p className="section-sub-heading">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;