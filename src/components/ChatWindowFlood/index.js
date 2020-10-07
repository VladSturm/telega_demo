import React, { useState } from 'react'
import Message from '../Message'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { setMessagesFlood } from '../../stores/actions'
import { ChatWindowWrap, Colors, Wrap } from '../../style'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send'
import moment from 'moment'
import update from 'immutability-helper';

const KeyboardStyle = styled.div`
    background-color: ${Colors.sideBarBackground};
    padding: 1em 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;    
    & ${Wrap} {
        display: flex;        
    }
`
const InputStyle = styled.input`
    flex: 1;
    background-color: ${Colors.sideBarBackground};
    border: none;
    color: white;
    margin-left: 1em;    
    outline-style: none;
    &::placeholder {
        color: ${Colors.gray};
    }
    
`

const InsertEmoticonIconStyle = styled(InsertEmoticonIcon)`
  cursor: pointer;    
`
const SendIconStyle = styled(SendIcon)`
  cursor: pointer;    
`

function ChatWindow({ dialog }) {

    // let dialogesSelector = useSelector(state => state.dialogesData.dialoges[dialog])
    let messagesFlood = useSelector(state => state.dialogesData.messagesFlood)
    const dispatch = useDispatch()
    console.log(messagesFlood)
    // let fetchMessage = dialogesSelector.messages

    // const [messagesData, setMessagesData] = useState(fetchMessage)
    const [messageInput, setMessageInput] = useState('')
    const [inputValue, setInputValue] = useState()

    const getMessageValue = e => setMessageInput(e.target.value)

    const getMessageInStore = () => {
        const data = {
            "guest_id": 6,
            "full_name": "Влад Добриснкий",
            "message": messageInput,
            "date_message": moment().format('hh:mm')
        } 

        let newMessagesFlood = update(messagesFlood, {$push: [data]})
        dispatch(setMessagesFlood(newMessagesFlood))       
        setInputValue()
    }

    const getColorRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const handleEnter = (e) => e.key === 'Enter' ? getMessageInStore() : null

    return (
        <div>
            <ChatWindowWrap>
                {messagesFlood.map((item, key) => (
                    <Message
                        name={item.full_name}
                        message={item.message}
                        time={item.date_message}
                        colorRandom={getColorRandom(0, 255)}
                        firsLetter={item.full_name[0].toUpperCase()}
                        full_name={item.full_name}
                        key={item.guest_id}
                    />
                ))}
            </ChatWindowWrap>
            <KeyboardStyle>
                <Wrap>
                    <InsertEmoticonIconStyle />
                    <InputStyle
                        placeholder='Сообщение'
                        autoFocus={true}
                        onChange={getMessageValue}
                        value={inputValue}
                        onKeyPress={handleEnter}
                    />
                    <SendIconStyle onClick={getMessageInStore} />
                </Wrap>
            </KeyboardStyle>
        </div>
    )
}

export default ChatWindow
