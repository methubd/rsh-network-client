import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";

const MessageBox = () => {
    const participantLink = useLoaderData();

    const {data: participantMsg = {}, isLoading: isParticipantMsgLoading} = useQuery(['participantMsg'], 
    async () => {
        const res = await axios.get(participantLink)
        return res.data;
    }
    )

    if(isParticipantMsgLoading){
        return <Loading/>
    }

    console.log(participantMsg, participantLink);

    return (
        <div>
            <h3>Message Box of {participantMsg?.senderName}</h3>
        </div>
    );
};

export default MessageBox;