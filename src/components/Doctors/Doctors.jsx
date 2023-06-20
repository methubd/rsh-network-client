import { Helmet } from 'react-helmet';
import './Doctors.css'

const Doctors = () => {


    return (        
        <div className="doctor-container">
            <Helmet title="Doctors | RSH"/>

            <div className='doctor-card'>
                <img className="doc-img" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/310401233_631744428387940_6328679932218072339_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l7FPIA94VzMAX_3DMLv&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCH7S7-Ys23s-fSy_MkTI9_awUa5o75V4qRPR1TQKVbQQ&oe=64954B0C" alt="" />
                <h3 className='doc-name'>Dr. Rafiqul Islam</h3>
                <p className='doc-speciality'>Critical Care Medicine</p>
                <p className='chamber-days'>Sat - Fri</p>
                <button className='btn-primary'>Appointment</button>
            </div>
            
            <div className='doctor-card'>
                <img className="doc-img" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/310401233_631744428387940_6328679932218072339_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l7FPIA94VzMAX_3DMLv&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCH7S7-Ys23s-fSy_MkTI9_awUa5o75V4qRPR1TQKVbQQ&oe=64954B0C" alt="" />
                <h3 className='doc-name'>Dr. Rafiqul Islam</h3>
                <p className='doc-speciality'>Critical Care Medicine</p>
                <p className='chamber-days'>Sat - Fri</p>
                <button className='btn-primary'>Appointment</button>
            </div>
            
            <div className='doctor-card'>
                <img className="doc-img" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/310401233_631744428387940_6328679932218072339_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l7FPIA94VzMAX_3DMLv&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCH7S7-Ys23s-fSy_MkTI9_awUa5o75V4qRPR1TQKVbQQ&oe=64954B0C" alt="" />
                <h3 className='doc-name'>Dr. Rafiqul Islam</h3>
                <p className='doc-speciality'>Critical Care Medicine</p>
                <p className='chamber-days'>Sat - Fri</p>
                <button className='btn-primary'>Appointment</button>
            </div>
            
            <div className='doctor-card'>
                <img className="doc-img" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/310401233_631744428387940_6328679932218072339_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l7FPIA94VzMAX_3DMLv&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCH7S7-Ys23s-fSy_MkTI9_awUa5o75V4qRPR1TQKVbQQ&oe=64954B0C" alt="" />
                <h3 className='doc-name'>Dr. Rafiqul Islam</h3>
                <p className='doc-speciality'>Critical Care Medicine</p>
                <p className='chamber-days'>Sat - Fri</p>
                <button className='btn-primary'>Appointment</button>
            </div>
        </div>
    );
};

export default Doctors;