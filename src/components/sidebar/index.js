import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { Wrap, Colors, StyledLink } from '../../style'
import {
    useHistory
  } from "react-router-dom"

const SidebarStyle = styled.div`
    background-color: ${Colors.sideBarBackground};
    padding: 1em 0;
`

const Liste = styled.ul`
    display: flex;
    justify-content: space-between;
    & li {
        cursor: pointer;
    }
`



function Sidebar() {
    let history = useHistory()
    const goHome = () => {
        
        history.goBack()
    }
    return (
        <SidebarStyle>
            <Wrap>
                <Liste>
                    <li><MenuIcon /></li>
                    <li><StyledLink onClick={goHome} to={'/'}>Planktonics</StyledLink></li>
                    {/* <li><a href='/'>Planktonics</a></li> */}
                    <li><SearchIcon /></li>
                </Liste>
            </Wrap>
        </SidebarStyle>
    )
}

export default Sidebar
