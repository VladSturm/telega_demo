import React from 'react'
import styled from 'styled-components'
import { Colors, Wrap, LogoImg, Time } from '../../style'

const Message = styled.div`    
    flex: 1;
    & h2 {
        line-height: 6px;
        font-size: 14px;
    }
    & b {
      color: ${Colors.white}
    }
`

const MessageText = styled.p`    
    color: ${Colors.gray};
    line-height: 6px;
    & b {
        font-weight: 400;
    }
`

const UnreadWrap = styled.div`    
    background-color: ${Colors.gray};
    border-radius: 50%;
    min-width: 1.5em;
    min-height: 1.5em;
    display: grid;
    place-items: center;
`

const Unread = styled.b`
    font-size: 12px;
    margin: 0;
`

function Dialog({ dialogName, name, lastMessage, time, unread, navDispaly, logoDialog }) {

    const DialogStyle = styled.li`    
    display: ${navDispaly};
    & ${Wrap} {
        display: flex;
        align-items: center;
    }
    cursor: pointer;
    border-bottom: 1px solid #000;
    padding: 10px 0;
    &:hover {
        background-color: ${Colors.listHover};
    }    
`
    return (
        <DialogStyle >
            <Wrap >
                <LogoImg src={logoDialog} alt="logoDialog" />
                <Message>
                    <h2>{dialogName}</h2>
                    <MessageText><b>{name}: </b>{lastMessage}</MessageText>
                </Message>
                <div>
                    <Time>{time}</Time>
                    <UnreadWrap>
                        <Unread>{unread}</Unread>
                    </UnreadWrap>
                </div>
            </Wrap>
        </DialogStyle>
    )
}

export default Dialog
