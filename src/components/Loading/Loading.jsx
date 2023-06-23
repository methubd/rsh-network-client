import { Dna } from "react-loader-spinner";
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-icon'> 

        <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      
      </div>
    );
};

export default Loading;