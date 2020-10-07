import React from 'react'
import { Colors, Time } from '../../style'
import styled from 'styled-components'

const MessageWrap = styled.div`
   position: relative;   
   margin:  5px 3em;
   border-radius: 10px;
   border-bottom-left-radius: 0;
   background-color: ${props => props.full_name === "Влад Добриснкий" ? Colors.sideBarBackgroundHell : Colors.sideBarBackground};
   padding: 5px;
   width: max-content;
   & h3, p {
       line-height: 6px;
   }

   & ${Time} {
       text-align: end;
       line-height: 0;
   }
   
   &::after{
    position: absolute;
    content: ' ';  
    width: 0;
    height:0;
    border: 7px solid;
    border-color: transparent ${Colors.sideBarBackground} ${Colors.sideBarBackground} transparent;
    bottom: 0;
    left: -14px;
   }
    
`

function Message({ name, message, time, colorRandom, firsLetter, full_name }) {

    const IconGuestWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: -49px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgb(${colorRandom}, 165, 32);
    display: grid;
    place-items: center;
    
`
    return (
        <div>
            <MessageWrap autofocus={true} full_name={full_name}>
                <IconGuestWrap>
                    <b>{firsLetter}</b>
                </IconGuestWrap>
                <div>
                    <h3>{name}</h3>
                    <p>{message}</p>
                    <Time>{time}</Time>
                </div>
            </MessageWrap>
        </div>
    )
}

export default Message
