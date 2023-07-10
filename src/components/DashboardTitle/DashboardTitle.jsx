import './DashboardTitle.css'

const DashboardTitle = ({title}) => {
    return (
        <div className="dashboard-title-container">
            <h1>{title}</h1>
            <hr className='title-underline' />
        </div>
    );
};

export default DashboardTitle;