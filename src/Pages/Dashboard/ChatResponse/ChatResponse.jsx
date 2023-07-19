import { useQuery } from '@tanstack/react-query';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './ChatResponse.css'
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';
import { Link, Outlet } from 'react-router-dom';

const ChatResponse = () => {

    const {data: chatParticipats = [], isLoading: isChatParticipantsLoading} = useQuery(['chatParticipats'], 
    async () => {
        const res = await axios.get('http://localhost:5000/chat-response')
        return res.data
    }
    )

    if(isChatParticipantsLoading){
        return <Loading/>
    }

    console.log(chatParticipats);

    return (
        <div className='add-consultant-container'>
            <DashboardTitle
            title="Chat Response"
            />
            

            <div className='chat-res-container'>

                {/* Participats */}
                <div className='participants'>
                    <h4>Participants - {chatParticipats?.length}</h4>
                    {
                        chatParticipats?.map(participant => <Link to={`/dashboard/chat-response/message-box/${participant._id}`} key={participant._id}>{participant?.senderName}</Link>)
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