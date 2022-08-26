import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";


//--------------------------------------
// Interface
//--------------------------------------

interface ButtonsProps {
    label: string;
    onClick: (e:any) => void
}

interface ViewProps extends ButtonsProps {
    btnId: any;
}

//--------------------------------------
// Hook
//--------------------------------------

const useHook = ({ label, onClick }: ButtonsProps): ViewProps => {
    const btnId = label;
    const displayDetails = useCallback((e: any) => onClick(e), []);

    return {
        btnId,
        label,
        onClick: displayDetails
    }
}

//--------------------------------------
// View
//--------------------------------------

export const ButtonElement = styled(Button)`
    display: flex;
    align-items: center;
    height: 100%;
    border: none;
    font-weight: bold;
    color: #fff !important;
    background-color: transparent;

    &:hover {
        color: #fff;
        background-color: rgb(198, 198, 198) !important;
    }

    &:active {
        color: #fff;
    }
`

const Label = styled.div`
    flex: 1;
    text-align: left;
`

const View: React.FC<ViewProps> = ({ btnId, label, onClick }) => (
    <ButtonElement id={btnId} onClick={onClick}>
        <Label>{label}</Label>
    </ButtonElement>    
)

//----------------------------------------------
// Container
//----------------------------------------------

export const Buttons : React.FC<ButtonsProps> = props =>  <View {...useHook(props)} />