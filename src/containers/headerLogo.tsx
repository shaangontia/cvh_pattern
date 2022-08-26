import React from 'react'
import styled from 'styled-components'
import logos from './logo.png';

//-----------------------------------
// Container
//-----------------------------------

const Logo = styled.img`
    max-height: 43px;
    max-width: 400px;
    padding: 0 12px;
`

export const HeaderLogo: React.FC = () => (
     <Logo src={logos} alt="logo"/>   
)