import './DashboardTitle.css'

const DashboardTitle = ({title}) => {
    return (
        <div className="dashboard-title-container">
            <h1>{title}</h1>
        </div>
    );
};

export default DashboardTitle;