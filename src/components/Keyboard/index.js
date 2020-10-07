import React, { useState } from 'react'
import styled from 'styled-components'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send'
import { useDispatch, useSelector } from 'react-redux'
import { setDialoges } from '../../stores/actions'
import { Colors, Wrap } from '../../style'

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

function Keyboard() {

    const [messageInput, setMessageInput] = useState('')
    const dispatch = useDispatch()
    const getMessageValue = e => setMessageInput(e.target.value)
    const dialogStore = useSelector(state => state.dialogesData.dialoges)

    const getMessageInStore = () => {
        const data = {
            "guest_id": 6,
            "full_name": "Влад Добриснкий",
            "message": messageInput,
            "date_message": "12:16"
        }
    }

    return (
        <KeyboardStyle>
            <Wrap>
                <InsertEmoticonIconStyle />
                <InputStyle
                    placeholder='Сообщение'
                    autoFocus={true}
                    onChange={getMessageValue}
                />
                <SendIconStyle onClick={getMessageInStore} />
            </Wrap>
        </KeyboardStyle>
    )
}

export default Keyboard
