import { useQuery } from '@tanstack/react-query';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './ChatResponse.css'
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import useAuth from '../../../Hooks/useAuth';

const ChatResponse = () => {
    const [senderMessages, setMessages] = useState();
    const [sender, setSender] = useState();

    const {user} = useAuth();

    const {data: chatParticipats = [], refetch, isLoading: isChatParticipantsLoading} = useQuery(['chatParticipats'], 
    async () => {
        const res = await axios.get('https://rsh-network-server.vercel.app/chat-response')
        return res.data
    }
    )



    if(isChatParticipantsLoading){
        return <Loading/>
    }

    const handleShowMessage = (participant, senderMessages) => {
        setSender(participant);
        setMessages(senderMessages);
        refetch();
    }

    

    const handleSendMessage = (event) => {
        event.preventDefault();

        const form = event.target;
        const message = form.message.value;
        
        const newMessage = {
            doctorMsg: message,
            msgSender: user?.displayName
        };

        if(message === ""){
            return
        }
        else{
            axios.post(`https://rsh-network-server.vercel.app/chat-update-doctor/${sender?._id}`, newMessage)
            .then(data => {
            console.log(data);
            form.reset();
            refetch();
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        })
        }
    
    }

    return (
        <div className='add-consultant-container'>
            <DashboardTitle
            title="Chat Response"
            />
            

            <div className='chat-res-container'>

                {/* Participats */}
                <div  className='participants'>
                    {
                        chatParticipats?.map((participant, index) => <div 
                        onClick={() => handleShowMessage (participant, participant?.content)} className='participant' 
                        key={index}>
                            <img className='profile-picture' src={participant?.senderPhoto} alt="" />
                            <p className='participant-name'>{participant?.senderName}</p>
                        </div>)
                    }
                </div>
                
                { sender &&
                    <div>
                    <section className='chat-response-container'>
            {/* Chat Box Header */}
                        <div className='chat-response-body fade-in'>
                            <div className='live-chat-profile'>
                                <img className='profile-picture' src={sender?.senderPhoto} alt="" />
                                <div className='user-info'>
                                    <h4>{sender?.senderName}</h4>
                                    <p>Total Messages : {senderMessages?.length}</p>
                                </div>
                            </div>

                            <div className="chat-box">
                            <div className="messages">
            {/* Chat Box - Sender Messages */}
                            {
                                senderMessages?.map((senderMessage, index) => <section
                                key={index}
                                >
                                { senderMessage?.patientMsg &&
                                <div 
                                className="message received fade-in">
                                    <div className="content">
                                        <p>{senderMessage?.patientMsg}</p>
                                        <hr className='sender-top-line' />
                                        <span className="sender">{sender?.senderName}</span>
                                    </div>
                                </div>
                                }

                                <div className='msg-author'>
                                { senderMessage?.doctorMsg &&
                                <div className="message sent">
                                    <div className="content">
                                    <p>{senderMessage?.doctorMsg}</p>
                                        <hr className='sender-top-line' />
                                        <span className="sender">{senderMessage?.msgSender}</span>
                                    </div>
                                </div>
                                }
                            </div>

                                </section>)
                            }
                                {/* Add more message elements here */}
                            </div>

                            <form onSubmit={handleSendMessage} className="input-area">
                                <input type="text" name='message' placeholder="Type your message..." />
                                <button className='btn-send-message' type='submit'><PaperAirplaneIcon width={30}/> </button>
                            </form>
                            </div>

                        </div>
                    </section>
                </div>
                }

            </div>
        </div>
    );
};

export default ChatResponse;