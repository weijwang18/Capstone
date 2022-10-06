import React from "react";
import styled from 'styled-components';

const Styles = styled.section`
borderTop: 1px solid #E7E7E7;
textAlign: center;
padding: 20px;
position: fixed;
left: 0;
bottom: 0;
height: 60px;
width: 100%;
display: block;
padding: 20px;
height: 60px;
width: 100%;
font-weight: bold;
color:#303e5c
`
function Footer(){
    return (
    <React.Fragment>
    <Styles>
    <p> Coded by 🎈Winnie</p>
    </Styles>
    </React.Fragment>
    )
}

export default Footer;