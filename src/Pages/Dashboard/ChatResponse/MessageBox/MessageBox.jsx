import './MessageBox.css'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const MessageBox = () => {
    const participantLink = useLoaderData();
    console.log(participantLink);

    const {data: participantMsg = [], isLoading: isParticipantMsgLoading} = useQuery(['participantMsg'], 
    async () => {
        const res = await axios.get(participantLink)
        return res.data;
    }
    )

    if(isParticipantMsgLoading){
        return <Loading/>
    }

    return (
        <section className='msg-box-container'>
            <section className='live-chat-container'>
            
            <div className='live-chat-body fade-in'>
                <div className='live-chat-profile'>
                    <img className='profile-picture' src={participantMsg?.senderPhoto} alt="" />
                    <div className='user-info'>
                        <h4>{participantMsg? participantMsg?.senderName : "No Name"}</h4>
                        <p>Total Messages : {participantMsg?.length}</p>
                    </div>
                </div>

                <div className="chat-box">

                <div className="messages">
                    
                   {
                    participantMsg?.content?.map((uMsg, index) => <div 
                    key={index} className="message received fade-in">
                        <div className="content">
                            <p>{uMsg?.patientMsg}</p>
                            <hr className='sender-top-line' />
                            <span className="sender">{participantMsg?.senderName}</span>
                        </div>
                    </div>)
                   }

                    <div className="message sent">
                        <div className="content">
                            <p>Hey, , How are you? our Doctor is now on offline, please write your query we will send get back to you very soon!</p>
                            <hr className='sender-top-line' />
                            <span className="sender">Customer Support Team</span>
                        </div>
                    </div>
                    
                    {/* Add more message elements here */}
                </div>

                <form className="input-area">
                    <input type="text" name='message' placeholder="Type your message..." />
                    <button className='btn-send-message' type='submit'><PaperAirplaneIcon width={30}/> </button>
                </form>
                </div>

            </div>
        </section>

        </section>
    );
};

export default MessageBox;