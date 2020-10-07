import React from 'react'
import { Wrap, LogoImg, DialogNameWrap, NumbersGuest } from '../../style'
import ChatWindowFlood from '../ChatWindowFlood'
import { useSelector } from 'react-redux'

function Work() {
    const messagesData = useSelector(state => state.dialogesData.dialoges[1])
    return (
        <div>
            <Wrap>
                <DialogNameWrap>
                    <LogoImg src={messagesData.logo} />
                    <section>
                        <h2>{messagesData.name}</h2>
                        <NumbersGuest>{messagesData.gueste.length} участников</NumbersGuest>
                    </section>
                </DialogNameWrap>
                <ChatWindowFlood />
            </Wrap>
        </div>
    )
}

export default Work