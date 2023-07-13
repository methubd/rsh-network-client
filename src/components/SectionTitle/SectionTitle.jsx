import './SectionTitle.css'

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="section-heading-container fade-in">
            <h1 className='section-heading'>{heading}</h1>
            <p className="section-sub-heading">{subHeading}</p>
            <hr className="section-title-divider" />
        </div>
    );
};

export default SectionTitle;