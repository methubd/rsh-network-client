import useAuth from '../../Hooks/useAuth';
import './LiveChat.css'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const LiveChat = () => {
    const {user} = useAuth();

    const {data: userMessages = [], refetch, isLoading: isUserMessageLoading} = useQuery(['userMessages'], 
    async () => {
        const res = await axios.get(`http://localhost:5000/chats/${user?.email}`)
        return res.data;
    }
    )

    const userMessage = userMessages.map(userMsg => userMsg?.content);

    if(isUserMessageLoading){
        return <Loading/>
    }

    const handleSendMsg = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const newMessage = {
            patientMsg: message,
          };

        if(message === ""){
            return
        }
        else{
            axios.post(`http://localhost:5000/chat-update/${user?.email}`, newMessage)
            .then(data => {
            console.log(data);
            form.reset();
            refetch();
        })
        }
        
    }
    

    return (
        <section className='live-chat-container'>
            
            <div className='live-chat-body fade-in'>
                <div className='live-chat-profile'>
                    <img className='profile-picture' src={user?.photoURL} alt="" />
                    <div className='user-info'>
                        <h4>{user? user.displayName : "No Name"}</h4>
                        <p>Total Messages : {userMessage[0]?.length}</p>
                    </div>
                </div>

                <div className="chat-box">

                <div className="messages">
                    
                    {
                        userMessage[0]?.map(uMsg => <div key={uMsg._id} className="message received fade-in">
                            <div className="content">
                                {/* if doctor message not true, only show the patient message */}
                                { uMsg?.doctorMsg ||
                                    <p>{uMsg?.patientMsg}</p>
                                }
                                <hr className='sender-top-line' />
                                <span className="sender">{user?.displayName}</span>
                            </div>
                        </div>)
                        
                    }                    

                    <div className="message sent">
                        <div className="content">
                            <p>Hey, {user?.displayName}, How are you? our Doctor is now on offline, please write your query we will send get back to you very soon!</p>
                            <hr className='sender-top-line' />
                            <span className="sender">Customer Support Team</span>
                        </div>
                    </div>
                    
                    {/* Add more message elements here */}
                </div>

                <form onSubmit={handleSendMsg} className="input-area">
                    <input type="text" name='message' placeholder="Type your message..." />
                    <button className='btn-send-message' type='submit'><PaperAirplaneIcon width={30}/> </button>
                </form>
                </div>

            </div>
        </section>
    );
};

export default LiveChat;