import styled from "styled-components";
import {FormEvent, FunctionComponent, useCallback, useState} from "react";
import EnterButton from "../../EnterButton";

const SendForm = styled.form`
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`;

const SendInputField = styled.input`
    flex: 1;
    border-radius: 20px;
    border: 0;
    padding-left: 10px;
`;

const SendButton = styled(EnterButton)`
    margin-left: 20px;
`;

interface SendMessageProps {
    messageText: string,
    sendMessage: (messageContent: string) => void
}

const SendMessage: FunctionComponent<SendMessageProps> = ({messageText, sendMessage}: SendMessageProps) => {
    const [inputSend, setInputSend] = useState(messageText);
    const OnSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage(inputSend);
        setInputSend('');
    }, [inputSend])

    return (
        <SendForm onSubmit={(e) => OnSubmit(e)}>
            <SendInputField
                type="text"
                value={inputSend}
                placeholder="Type a message ..."
                onChange={(e) => setInputSend(e.target.value)}
            />
            <SendButton type="submit" value="Send" />
        </SendForm>
    )
};

export default SendMessage;