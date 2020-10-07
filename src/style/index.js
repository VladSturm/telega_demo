import styled from 'styled-components'
import { Link } from "react-router-dom"


export const Colors = {
    gray: 'rgb(119, 131, 143)',
    white: "#fff",
    listHover: 'rgb(31, 59, 90);',
    sideBarBackground: "rgb(26, 51, 66)",
    sideBarBackgroundHell: "rgb(23, 87, 128)"
}

export const Wrap = styled.div`
    margin: 0 1em;
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: white;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
}
`
export const LogoImg = styled.img`    
width: 45px;
height: 45px;
border-radius: 50%;
margin-right: 1em;
cursor: pointer;
`

export const Time = styled.p`    
color: ${Colors.gray};
line-height: 6px;
font-size:12px;
`

export const ChatWindowWrap = styled.div`
display: flex;
position: relative;
flex-direction: column;
justify-content: flex-end;
overflow-y: scroll;
padding-left: 8px;
height: 100%;
margin-bottom: 5vh;



&::-webkit-scrollbar {
  display: none;
  width: 0;
}
`

export const DialogNameWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    & h2, p {
        line-height: 6px;
    }
    
`
export const NumbersGuest = styled.p`
    color: ${Colors.gray};
`