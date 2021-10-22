import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import Message from "../Models/Messsage";
import User from "../Models/User";
import './index.css';
import Chat from "./Chat";
import Container from "./Container";
import UsersList from "./UsersList";
import { MessagingClient } from "../Proto/messaging_grpc_web_pb";
// @ts-ignore
import { EmptyRequest, MessageRequest, MessageResponse} from "../Proto/messaging_pb";
import {ClientReadableStream} from "grpc-web";

const MainPanel = styled.main`
`;

const ContentPanel = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  grid-template-areas: "chat users";
`;

const client = new MessagingClient('https://localhost:5001', '', '');

/*const messages: Array<Message> = [
  { id:'1', userName: 'Victor', createdDateTime: new Date('2021-09-20T10:24:00'), content: 'Hi' },
  { id:'2', userName: 'Victor', createdDateTime: new Date('2021-09-20T10:26:00'), content: 'Is there any way I can help?' },
  { id:'3', userName: 'User', createdDateTime: new Date('2021-09-20T11:04:00'), content: 'Hi! Do you have any hoodies on sale?' },
  { id:'4', userName: 'Bob', createdDateTime: new Date('2021-09-20T11:15:00'), content: 'Sure! Wait a minute ...' },
  { id:'5', userName: 'Victor', createdDateTime: new Date('2021-09-20T11:44:00'), content: 'Maybe something else?' },
  { id:'6', userName: 'Victor', createdDateTime: new Date('2021-09-20T11:44:00'), content: 'Maybe something else? 1111111111111111111 11111111111111111111 11111111111111111111111111111111111111111111111111111111111 2222222222222' },
];*/

const initMessages: Array<Message> = [];

const users: Array<User> = [
  { name: 'Victor'},
  { name: 'User'},
  { name: 'Bob'},
];

function App() {
    const [messages, setMessages] = useState(initMessages);

    useEffect(() => {
        console.log('Getting messages ...');
        // @ts-ignore
        const stream : ClientReadableStream<MessageResponse> = client.getMessagesStreamed(new EmptyRequest(), {});

        // @ts-ignore
        stream.on('data', function(response: MessageResponse) {
            const id = response.getId();
            const userName = response.getUsername();
            const content = response.getContent();
            const message = {id, userName, content};
            setMessages((oldMessages) => [...oldMessages, message]);
        });

        // @ts-ignore
        stream.on('status', function(status) {
            console.log(status.code, status.details, status.metadata);
        });

        stream.on("end", () => {
            console.log("Messages stream closed.");
        });
    }, []);

    function sendMessageContent(messageContent: string) {
        const messageRequest = new MessageRequest();
        //TODO: replace by userName from localStore
        messageRequest.setUsername('User');
        messageRequest.setContent(messageContent);
        console.log(`Sending message: ${messageRequest}`);

        client.sendMessage(messageRequest, {}, (error, response) => {
            console.log(error);
            console.log(response);
        });
    }
    return (
        <MainPanel>
            <Container>
                <ContentPanel>
                    <Chat messages={messages} sendMessage={sendMessageContent}/>
                    <UsersList users={users}/>
                </ContentPanel>
            </Container>
        </MainPanel>
    );
}

export default App;
