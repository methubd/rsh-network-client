import { BriefcaseIcon } from '@heroicons/react/24/solid'
import './HighlightSection.css'

const HighlightSection = () => {
    return (
        <section className='highlight-container container'>
                <div className='highligth-btn-container'>

                    <div className='highlight-btn'>
                        <h2>Book an Appointment</h2>
                        <p>With country leading experts</p>
                        <BriefcaseIcon width={50}/>
                    </div>

                </div>

  

        </section>
    );
};

export default HighlightSection;