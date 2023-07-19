import { useQuery } from '@tanstack/react-query';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './ChatResponse.css'
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';
import { Link, Outlet } from 'react-router-dom';

const ChatResponse = () => {

    const {data: chatParticipats = [], isLoading: isChatParticipantsLoading} = useQuery(['chatParticipats'], 
    async () => {
        const res = await axios.get('https://rsh-network-server.vercel.app/chat-response')
        return res.data
    }
    )

    if(isChatParticipantsLoading){
        return <Loading/>
    }

    return (
        <div className='add-consultant-container'>
            <DashboardTitle
            title="Chat Response"
            />
            

            <div className='chat-res-container'>

                {/* Participats */}
                <div className='participants'>
                    {
                        chatParticipats?.map((participant, index) => <div className='participant' key={index}>
                            <img className='profile-picture' src={participant?.senderPhoto} alt="" />
                            <Link className='participant-name' to={`/dashboard/chat-response/message-box/${participant._id}`}> {participant?.senderName}
                            </Link>
                        </div>
                        
                        )
                    }
                </div>
                
                <div>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default ChatResponse;