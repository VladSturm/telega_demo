import React, { useState } from 'react'
import Dialog from '../Dialog'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Work from '../Work'
import Flud from '../Flud'
import { StyledLink } from '../../style'
import { useSelector } from "react-redux";
import styled from 'styled-components'

const DialogesWrap = styled.div`
    display: flex;
    @media (max-width: 1300px) {
            flex-direction: column;
            &ul {
                height: auto;
                width: 100vw;
            }
    }
    & ul {
        width: 30vw;
        height: 100vh;
        border-left: 1px solid #000;
        @media (max-width: 1300px) {
                height: auto;
                width: 100vw;
           
    }
        
        
    }

    
`

function Dialoges() {

    // const [navNone, setNavNone] = useState('block')
    let dialogesSelector = useSelector(state => state.dialogesData.dialoges)

    return (
        <DialogesWrap>
            <Router>
                <ul>
                    {dialogesSelector.map((item, key) => (
                        <StyledLink key={item.id} to={item.link}>
                            <Dialog
                                dialogName={item.name}
                                name={item.messages[item.messages.length - 1].full_name}
                                lastMessage={item.messages[item.messages.length - 1].message}
                                time={item.messages[item.messages.length - 1].date_message}
                                unread={item.unread_messages}
                                
                                logoDialog={item.logo}
                            />
                        </StyledLink>
                    ))}
                </ul>
                <Switch>
                    <Route path="/work" component={Work}>
                    </Route>
                    <Route path="/flood" component={Flud}>
                    </Route>
                </Switch>
            </Router>
        </DialogesWrap>
    )
}

export default Dialoges
