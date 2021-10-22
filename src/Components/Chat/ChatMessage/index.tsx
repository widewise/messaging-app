import styled from "styled-components";
import {FunctionComponent} from "react";
import Message from "../../../Models/Messsage";

const MessagePanel = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    max-width: 280px;
`;

const UserNameLabel = styled.label`
    margin: 20px 0;
`;

const MessageContent = styled.p`
    background: #FFFFFF;
    padding: 15px 30px;
    margin: 0;
    border-radius: 12px;
    border: 0;
    box-shadow: 0 0 8px -1px #000000;
    text-overflow: ellipsis;
    overflow: hidden;
`;

interface ChatMessageProps {
    message: Message,
    isShowUserName: boolean
}

const ChatMessage : FunctionComponent<ChatMessageProps> = ({ message, isShowUserName } : ChatMessageProps) => (
    <MessagePanel>
        {isShowUserName ? <UserNameLabel>{message.userName}</UserNameLabel> : <></>}
        <MessageContent data-tooltip={message.content}>{message.content}</MessageContent>
    </MessagePanel>
);

export default ChatMessage;