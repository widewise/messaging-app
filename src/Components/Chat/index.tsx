import styled from "styled-components";
import {FunctionComponent} from "react";
import Message from "../../Models/Messsage";
import ChatMessage from "./ChatMessage/index"
import SendMessage from "./SendMessage";

const ChatPanel = styled.div`
    grid-area: chat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #DDDDDD;
    margin: 0;
    padding: 0;
`;

const ChatMessagesPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-y: auto;
`;

const CurrentUserMessage = styled.div`
    align-self: flex-end;
`;

interface ChatProps {
    messages: Array<Message>,
    sendMessage: (messageContent: string) => void
}

const currentUser: string = 'User';

const Chat: FunctionComponent<ChatProps> = ({ messages, sendMessage }: ChatProps) => (
    <ChatPanel>
        <ChatMessagesPanel>
            {
                messages.map(
                    (message, index, messagesArray) => {
                        const previousUserName = index > 0 ?  messagesArray[index - 1].userName : '';
                        if(message.userName === currentUser) {
                            return (
                                <CurrentUserMessage>
                                    <ChatMessage key={message.id} message={message} isShowUserName={false} />
                                </CurrentUserMessage>);
                        }
                        return (<ChatMessage key={message.id} message={message} isShowUserName={message.userName !== previousUserName} />);
                    }
                )
            }
        </ChatMessagesPanel>
        <SendMessage messageText={''} sendMessage={sendMessage} />
    </ChatPanel>
);

export default Chat;